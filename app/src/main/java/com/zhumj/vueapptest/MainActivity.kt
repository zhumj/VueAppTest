package com.zhumj.vueapptest

import android.annotation.SuppressLint
import android.net.Uri
import android.os.Bundle
import android.webkit.*
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import com.zhumj.vueapptest.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private var filePathCallback: ValueCallback<Array<Uri>>? = null
    private val fileChooser = registerForActivityResult(ActivityResultContracts.StartActivityForResult()){
        filePathCallback?.onReceiveValue(WebChromeClient.FileChooserParams.parseResult(it.resultCode, it.data))
        filePathCallback = null
    }

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        val mViewBinding = ActivityMainBinding.inflate(layoutInflater)
        super.onCreate(savedInstanceState)
        setContentView(mViewBinding.root)
        // 实现状态栏图标和文字颜色为暗色
        ViewCompat.getWindowInsetsController(mViewBinding.root)?.isAppearanceLightStatusBars = false

        mViewBinding.webView.settings.javaScriptEnabled = true //-> 是否开启JS支持
        // 系统默认会通过手机浏览器打开网页，为了能够直接通过WebView显示网页，则必须设置
        mViewBinding.webView.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean {
                view.loadUrl(request.url.toString())
                return true
            }
        }
        // 解决 WebView 在5.0系统以上点击选择文件没反应的问题
        mViewBinding.webView.webChromeClient = object : WebChromeClient() {
            override fun onShowFileChooser(webView: WebView, filePathCallback: ValueCallback<Array<Uri>>, fileChooserParams: FileChooserParams): Boolean {
                this@MainActivity.filePathCallback = filePathCallback
                try {
                    fileChooser.launch(fileChooserParams.createIntent())
                } catch (e: Exception) {
                    e.printStackTrace()
                    return false
                }
                return true
            }
        }
        mViewBinding.webView.loadUrl("file:///android_asset/vue/index.html")
    }
}