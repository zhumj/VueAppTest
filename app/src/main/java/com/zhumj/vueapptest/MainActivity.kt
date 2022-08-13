package com.zhumj.vueapptest

import android.annotation.SuppressLint
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.core.view.ViewCompat
import com.zhumj.vueapptest.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        val mViewBinding = ActivityMainBinding.inflate(layoutInflater)
        super.onCreate(savedInstanceState)
        setContentView(mViewBinding.root)
        //实现状态栏图标和文字颜色为暗色
        ViewCompat.getWindowInsetsController(mViewBinding.root)?.isAppearanceLightStatusBars = true

        mViewBinding.webView.settings.javaScriptEnabled = true //-> 是否开启JS支持
        //系统默认会通过手机浏览器打开网页，为了能够直接通过WebView显示网页，则必须设置
        mViewBinding.webView.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean {
                view.loadUrl(request.url.toString())
                return true
            }
        }
        mViewBinding.webView.loadUrl("file:///android_asset/vue/index.html")
    }
}