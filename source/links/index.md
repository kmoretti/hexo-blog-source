---
title: 友人帐
type: link
subtitle: 我的友链页面
top_img: https://jsd.268682.xyz/gh/Kemeow0815/img@main/img/bg.webp               # 顶部图片(可选)
---

{% tabs yaml %}
我的友链&友链格式
<!-- tab yaml -->
- name: 喵洛阁
link: https://blog.kemeow.top/
avatar: https://q2.qlogo.cn/headimg_dl?dst_uin=3149261770&spec=0
descr: 人生如逆旅，我亦是行人。
feeds: https://blog.kemeow.top/atom.xml
friendslink: https://blog.kemeow.top/link
tags:
  - Hexo
siteshot: https://imgbed.081531.xyz/file/telegram/1jJZ7ynW.png
     
<!-- endtab -->
<!-- tab json -->
{
  "name": "喵洛阁",
  "link": "https://blog.kemeow.top/",
  "avatar": "https://q2.qlogo.cn/headimg_dl?dst_uin=3149261770&spec=0",
  "descr": "人生如逆旅，我亦是行人。",
  "feeds": "https://blog.kemeow.top/atom.xml",
  "friendslink": "https://blog.kemeow.top/link",
  "tags": ["Hexo"],
  "siteshot": "https://imgbed.081531.xyz/file/telegram/1jJZ7ynW.png"
}
<!-- endtab -->
<!-- tab 申请格式(yaml) -->
- name: 网站名称
link: 网站链接
avatar: 头像
descr: 网站介绍
feeds: RSS
friendslink: 您网站的友链页面
tags: 标签（可选，支持多个）
siteshot: 网站截图
     
<!-- endtab -->
{% endtabs %}

> 你可以通过**评论**或**填写表单**两种方式来申请友链或更新信息，优先推荐使用**填写表单**的方式！

{% raw %}
<link rel="stylesheet" href="/css/link.css">

<div id="fl-wrap">
  <h3>申请条件</h3>
  <p>请先确认满足以下条件：</p>
  <label><input type="checkbox" id="fl-cb1"> 我已添加 <strong>喵洛阁</strong> 的友情链接</label>
  <label><input type="checkbox" id="fl-cb2"> 我的网站现在可以在中国大陆区域正常访问</label>
  <label><input type="checkbox" id="fl-cb3"> 网站内容符合中国大陆法律法规</label>
  <label><input type="checkbox" id="fl-cb4"> 我的链接主体为<strong>个人</strong>，网站类型为<strong>博客</strong></label>
  <label><input type="checkbox" id="fl-cb5"> 网站域名不是 us.kg 等免费域名（github.io、gitee.io 除外）</label>
  <div class="fl-hint fl-condition-hint">⚠ 请先勾选所有条件后再填写申请表单</div>

  <div id="fl-options" style="display:none">
    <div class="fl-hint">请选择操作</div>
    <div class="fl-option-btns">
      <button class="fl-option-btn" id="fl-btn-apply">申请友链</button>
      <button class="fl-option-btn" id="fl-btn-update">更新友链/信息</button>
    </div>

    <div class="fl-form" id="fl-form-apply">
      <h3>申请友链</h3>
      <form id="fl-f-apply">
        <div class="fl-field">
          <label class="fl-label">站点名称 <span class="fl-star">*</span></label>
          <input class="fl-input" id="fl-an" required placeholder="站点名称">
        </div>
        <div class="fl-field">
          <label class="fl-label">站点地址 <span class="fl-star">*</span></label>
          <input class="fl-input" id="fl-au" type="url" required placeholder="网站地址">
        </div>
        <div class="fl-field">
          <label class="fl-label">站点描述</label>
          <input class="fl-input" id="fl-ad" placeholder="例如：一个关于技术和设计的博客">
        </div>
        <div class="fl-field">
          <label class="fl-label">头像地址 <span class="fl-star">*</span></label>
          <input class="fl-input" id="fl-aa" type="url" required placeholder="头像地址">
        </div>
        <div class="fl-field">
          <label class="fl-label">友链页面 <span class="fl-star">*</span></label>
          <input class="fl-input" id="fl-afriendslink" type="url" required placeholder="你的友链页面地址（如 https://example.com/link/）">
        </div>
        <div class="fl-field">
          <label class="fl-label">站点截图</label>
          <input class="fl-input" id="fl-as" type="url" placeholder="站点截图链接（支持siteshot和topimg字段）">
        </div>
        <div class="fl-field">
          <label class="fl-label">RSS 订阅</label>
          <input class="fl-input" id="fl-afeeds" type="url" placeholder="RSS 订阅地址">
        </div>
        <div class="fl-field">
          <label class="fl-label">邮箱</label>
          <input class="fl-input" id="fl-ae" type="email" placeholder="联系邮箱（选填，用于接收审核结果通知）">
        </div>
        <div class="fl-hint fl-sm">用于接收审核结果通知</div>
        <div class="fl-err" id="fl-err-apply"></div>
        <button type="submit" class="fl-btn" id="fl-sb-apply">提交</button>
      </form>
    </div>

    <div class="fl-form" id="fl-form-update">
      <h3>更新友链/信息</h3>
      <form id="fl-f-update">
        <div class="fl-field">
          <label class="fl-label">原站点地址 <span class="fl-star">*</span></label>
          <input class="fl-input" id="fl-uorig" type="url" required placeholder="原来的网站地址">
        </div>
        <div class="fl-update-divider">
          <p>新的信息（只填需要修改的字段）</p>
        </div>
        <div class="fl-field">
          <label class="fl-label">新站点名称 <span class="fl-star">*</span></label>
          <input class="fl-input" id="fl-un" required placeholder="站点名称">
        </div>
        <div class="fl-field">
          <label class="fl-label">新站点地址 <span class="fl-star">*</span></label>
          <input class="fl-input" id="fl-uu" type="url" required placeholder="网站地址">
        </div>
        <div class="fl-field">
          <label class="fl-label">新站点描述</label>
          <input class="fl-input" id="fl-ud" placeholder="例如：一个关于技术和设计的博客">
        </div>
        <div class="fl-field">
          <label class="fl-label">新头像地址 <span class="fl-star">*</span></label>
          <input class="fl-input" id="fl-ua" type="url" required placeholder="头像地址">
        </div>
        <div class="fl-field">
          <label class="fl-label">友链页面 <span class="fl-star">*</span></label>
          <input class="fl-input" id="fl-ufriendslink" type="url" required placeholder="你的友链页面地址（如 https://example.com/link/）">
        </div>
        <div class="fl-field">
          <label class="fl-label">新站点截图</label>
          <input class="fl-input" id="fl-us" type="url" placeholder="站点截图链接（支持siteshot和topimg字段）">
        </div>
        <div class="fl-field">
          <label class="fl-label">RSS 订阅</label>
          <input class="fl-input" id="fl-ufeeds" type="url" placeholder="RSS 订阅地址">
        </div>
        <div class="fl-field">
          <label class="fl-label">邮箱</label>
          <input class="fl-input" id="fl-ue" type="email" placeholder="联系邮箱（选填，用于接收审核结果通知）">
        </div>
        <div class="fl-hint fl-sm">用于接收审核结果通知</div>
        <div class="fl-err" id="fl-err-update"></div>
        <button type="submit" class="fl-btn" id="fl-sb-update">提交</button>
      </form>
    </div>
  </div>
</div>

<script>
var API = 'https://verify.081531.xyz/api/submissions';
var cb1=document.getElementById('fl-cb1'),cb2=document.getElementById('fl-cb2'),cb3=document.getElementById('fl-cb3'),cb4=document.getElementById('fl-cb4'),cb5=document.getElementById('fl-cb5'),opts=document.getElementById('fl-options');

function updateOpts(){var allChecked=cb1.checked&&cb2.checked&&cb3.checked&&cb4.checked&&cb5.checked;opts.style.display=allChecked?'block':'none';document.querySelector('.fl-condition-hint').style.display=allChecked?'none':'block';document.querySelectorAll('#fl-options .fl-form').forEach(function(f){f.style.display='none'});document.querySelectorAll('.fl-option-btn').forEach(function(b){b.classList.remove('active')})}
cb1.addEventListener('change',updateOpts);cb2.addEventListener('change',updateOpts);cb3.addEventListener('change',updateOpts);cb4.addEventListener('change',updateOpts);cb5.addEventListener('change',updateOpts);

document.getElementById('fl-btn-apply').addEventListener('click',function(){document.getElementById('fl-form-apply').style.display='block';document.getElementById('fl-form-update').style.display='none';this.classList.add('active');document.getElementById('fl-btn-update').classList.remove('active')});
document.getElementById('fl-btn-update').addEventListener('click',function(){document.getElementById('fl-form-update').style.display='block';document.getElementById('fl-form-apply').style.display='none';this.classList.add('active');document.getElementById('fl-btn-apply').classList.remove('active')});

function submitForm(cbId,formId,getData){
  document.getElementById(formId).querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();var btn=this.querySelector('.fl-btn'),err=this.querySelector('.fl-err');btn.disabled=true;btn.textContent='提交中...';err.style.display='none';
    fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(getData(this))}).then(function(r){
      if(!r.ok)return r.json().then(function(d){throw new Error(d.error||'提交失败')});
      document.getElementById(formId).innerHTML='<div class="fl-success"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;margin:0 auto 16px"><polyline points="20 6 9 17 4 12"/></svg><h3>提交成功</h3><p>感谢您！友链申请已提交，等待管理员审核。<br>审核结果将通过邮件通知您。</p></div>';
    }).catch(function(e){err.textContent=e.message;err.style.display='block';btn.disabled=false;btn.textContent='提交'});
  });
}

submitForm('fl-form-apply','fl-form-apply',function(f){return{type:'apply',name:f.querySelector('#fl-an').value,url:f.querySelector('#fl-au').value,description:f.querySelector('#fl-ad').value,avatar:f.querySelector('#fl-aa').value,friendslink:f.querySelector('#fl-afriendslink').value,siteshot:f.querySelector('#fl-as').value,feeds:f.querySelector('#fl-afeeds').value,email:f.querySelector('#fl-ae').value}});
submitForm('fl-form-update','fl-form-update',function(f){return{type:'update',originalUrl:f.querySelector('#fl-uorig').value,name:f.querySelector('#fl-un').value,url:f.querySelector('#fl-uu').value,description:f.querySelector('#fl-ud').value,avatar:f.querySelector('#fl-ua').value,friendslink:f.querySelector('#fl-ufriendslink').value,siteshot:f.querySelector('#fl-us').value,feeds:f.querySelector('#fl-ufeeds').value,email:f.querySelector('#fl-ue').value}});
</script>
{% endraw %}

<div id="fl-status-section">
  <div class="fl-status-header">
    <div class="fl-status-title">
      友链申请列表
      <span class="fl-status-title-count" id="fl-status-count"></span>
    </div>
    <div class="fl-status-header-right">
      <div class="fl-status-dropdown" id="fl-status-dropdown">
        <button class="fl-status-dropdown-trigger">
          <span id="fl-status-dropdown-label">全部状态</span>
          <span class="fl-status-dropdown-arrow">▾</span>
        </button>
        <div class="fl-status-dropdown-menu">
          <div class="fl-status-dropdown-item active" data-status="">全部状态</div>
          <div class="fl-status-dropdown-item" data-status="pending">待审核</div>
          <div class="fl-status-dropdown-item" data-status="approved">已通过</div>
          <div class="fl-status-dropdown-item" data-status="rejected">已拒绝</div>
        </div>
      </div>
      <div id="fl-status-search-wrap">
        <span id="fl-status-search-icon">🔍</span>
        <input id="fl-status-search" type="text" placeholder="搜索名称">
      </div>
    </div>
  </div>
  <div id="fl-status-grid">
    <div class="fl-status-loading">加载中...</div>
  </div>
  <div id="fl-pagination"></div>
</div>

<script>
(function(){
var gridEl=document.getElementById('fl-status-grid');
var countEl=document.getElementById('fl-status-count');
var paginationEl=document.getElementById('fl-pagination');
var searchEl=document.getElementById('fl-status-search');
var dropdown=document.getElementById('fl-status-dropdown');
var dropdownTrigger=document.querySelector('#fl-status-dropdown .fl-status-dropdown-trigger');
var dropdownMenu=document.querySelector('#fl-status-dropdown .fl-status-dropdown-menu');
var dropdownLabel=document.getElementById('fl-status-dropdown-label');
var dropdownItems=document.querySelectorAll('#fl-status-dropdown .fl-status-dropdown-item');
var currentStatus='';
var currentPage=1;
var pageSize=12;
var searchTimer=null;

dropdownTrigger.addEventListener('click',function(e){
  e.stopPropagation();
  dropdown.classList.toggle('open');
});

dropdownItems.forEach(function(item){
  item.addEventListener('click',function(){
    dropdown.classList.remove('open');
    var status=this.getAttribute('data-status');
    currentStatus=status;
    dropdownLabel.textContent=this.textContent;
    dropdownItems.forEach(function(i){i.classList.remove('active')});
    this.classList.add('active');
    currentPage=1;
    render();
  });
});

document.addEventListener('click',function(){
  dropdown.classList.remove('open');
});

searchEl.addEventListener('input',function(){
  clearTimeout(searchTimer);
  searchTimer=setTimeout(function(){currentPage=1;render()},200);
});

function getStatusText(s){
  if(s==='pending') return '待审核';
  if(s==='approved') return '已通过';
  if(s==='rejected') return '已拒绝';
  return '';
}

function render(){
  var keyword=searchEl.value.trim().toLowerCase();
  var url=API+'?public=1';
  if(currentStatus) url+='&status='+currentStatus;
  if(keyword) url+='&search='+encodeURIComponent(keyword);
  gridEl.innerHTML='<div class="fl-status-loading">加载中...</div>';
  countEl.textContent='';
  paginationEl.innerHTML='';
  fetch(url).then(function(r){
    if(!r.ok) throw new Error('请求失败');
    return r.json();
  }).then(function(data){
    var list=data.submissions||[];
    var total=list.length;
    var totalPages=Math.ceil(total/pageSize)||1;
    if(currentPage>totalPages) currentPage=totalPages;
    var start=(currentPage-1)*pageSize;
    var pageItems=list.slice(start,start+pageSize);
    if(pageItems.length===0){
      gridEl.innerHTML='<div class="fl-status-empty">暂无数据</div>';
      countEl.textContent='共 0 条';
      return;
    }
    countEl.textContent='共 '+total+' 条';
    var html='';
    pageItems.forEach(function(item){
      var statusText=getStatusText(item.status);
      var typeText=item.type==='update'?'更新':'新增';
      var nameText=escapeHtml(item.name);
      var descText=escapeHtml(item.description||'暂无描述');
      html+='<div class="fl-status-item">'+
        '<div class="fl-status-top">'+
        '<div class="fl-status-name" title="'+nameText+'">'+nameText+'</div>'+
        '<div class="fl-status-top-right">'+
        '<span class="fl-status-badge '+item.status+'">'+statusText+'</span>'+
        '<span class="fl-status-type">'+typeText+'</span>'+
        '</div>'+
        '</div>'+
        '<div class="fl-status-desc" title="'+descText+'">'+descText+'</div>'+
        '</div>';
    });
    gridEl.innerHTML=html;
    renderPagination(totalPages);
  }).catch(function(){
    gridEl.innerHTML='<div class="fl-status-error">加载失败，请稍后重试</div>';
  });
}

function renderPagination(totalPages){
  if(totalPages<=1){
    paginationEl.innerHTML='';
    return;
  }
  var prevDisabled=currentPage<=1?'disabled':'';
  var nextDisabled=currentPage>=totalPages?'disabled':'';
  var html='';
  html+='<button class="fl-page-btn" onclick="window._goPage('+(currentPage-1)+')" '+prevDisabled+'>‹</button>';
  var pages=[];
  if(totalPages<=7){
    for(var i=1;i<=totalPages;i++) pages.push(i);
  }else{
    pages.push(1);
    if(currentPage>3) pages.push('...');
    for(var i=Math.max(2,currentPage-1);i<=Math.min(totalPages-1,currentPage+1);i++) pages.push(i);
    if(currentPage<totalPages-2) pages.push('...');
    pages.push(totalPages);
  }
  pages.forEach(function(p){
    if(p==='...'){
      html+='<span class="fl-page-dots">…</span>';
    }else{
      html+='<button class="fl-page-btn'+(p===currentPage?' active':'')+'" onclick="window._goPage('+p+')">'+p+'</button>';
    }
  });
  html+='<button class="fl-page-btn" onclick="window._goPage('+(currentPage+1)+')" '+nextDisabled+'>›</button>';
  paginationEl.innerHTML=html;
}

window._goPage=function(page){
  currentPage=page;
  render();
};

function escapeHtml(str){
  if(!str) return '';
  var d=document.createElement('div');
  d.textContent=str;
  return d.innerHTML;
}

render();
})();
</script>