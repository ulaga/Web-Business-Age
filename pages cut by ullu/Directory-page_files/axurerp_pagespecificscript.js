
var PageName = 'Directory-page';
var PageId = 'p81a70e60eca0414cb6a3791ab37c2007'
var PageUrl = 'Directory-page.html'
document.title = 'Directory-page';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURI(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: Variable values were truncated.');
}

function GetQuerystring() {
    return encodeURI('#OnLoadVariable=' + $OnLoadVariable + '&CSUM=1');
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad() {

}

var u62 = document.getElementById('u62');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u28 = document.getElementById('u28');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u59 = document.getElementById('u59');

x = 0;
y = 0;
InsertAfterBegin(u59ann, "<div id='u59Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u59', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u59').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u59based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u59base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u59based = document.getElementById('u59based');
            
InsertBeforeEnd(u59based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can view the public profile page of WBA in twitter<BR><BR></div>");

u59.style.cursor = 'pointer';
if (bIE) u59.attachEvent("onclick", Clicku59);
else u59.addEventListener("click", Clicku59, true);
function Clicku59(e)
{

if (true) {

	self.location.href="Member-click-Twitter-button.html" + GetQuerystring();

}

}

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u104 = document.getElementById('u104');

x = 0;
y = 0;
InsertAfterBegin(u104ann, "<div id='u104Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u104', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u104').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u104based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u104base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u104based = document.getElementById('u104based');
            
InsertBeforeEnd(u104based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives Advertise page to the member<BR><BR></div>");

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{

if (true) {

	self.location.href="Advertise-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u104'] = 'top';
var u93 = document.getElementById('u93');

x = 0;
y = 0;
InsertAfterBegin(u93ann, "<div id='u93Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u93', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u93').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u93based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u93base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u93based = document.getElementById('u93based');
            
InsertBeforeEnd(u93based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member redirected to the Blog page<BR><BR></div>");

u93.style.cursor = 'pointer';
if (bIE) u93.attachEvent("onclick", Clicku93);
else u93.addEventListener("click", Clicku93, true);
function Clicku93(e)
{

if (true) {

	self.location.href="Blog-page.html" + GetQuerystring();

}

}

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u112 = document.getElementById('u112');

x = 0;
y = 0;
InsertAfterBegin(u112ann, "<div id='u112Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u112', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u112').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u112based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u112base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u112based = document.getElementById('u112based');
            
InsertBeforeEnd(u112based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can enter any search terms and clic<BR><BR></div>");

u112.style.cursor = 'pointer';
if (bIE) u112.attachEvent("onclick", Clicku112);
else u112.addEventListener("click", Clicku112, true);
function Clicku112(e)
{

if (true) {

	self.location.href="Search-Results-page.html" + GetQuerystring();

}

}

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u193 = document.getElementById('u193');

var u56 = document.getElementById('u56');

var u161 = document.getElementById('u161');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u90 = document.getElementById('u90');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u179 = document.getElementById('u179');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u88 = document.getElementById('u88');

x = 0;
y = 0;
InsertAfterBegin(u88ann, "<div id='u88Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u88', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u88').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u88based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u88base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u88based = document.getElementById('u88based');
            
InsertBeforeEnd(u88based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives About page to the member<BR><BR></div>");

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

	self.location.href="About-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u88'] = 'top';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u108 = document.getElementById('u108');

x = 0;
y = 0;
InsertAfterBegin(u108ann, "<div id='u108Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u108', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u108').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u108based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u108base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u108based = document.getElementById('u108based');
            
InsertBeforeEnd(u108based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect to hisMyWBA page when the member is already login, otherwise redirect him/her to the Login page<BR><BR></div>");

u108.style.cursor = 'pointer';
if (bIE) u108.attachEvent("onclick", u108Click);
else u108.addEventListener("click", u108Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u108LinksClick'></DIV>")
var u108LinksClick = document.getElementById('u108LinksClick');
function u108Click(e) 
{

	ToggleLinks(e, 'u108LinksClick');
}

InsertBeforeEnd(u108LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u108Clickud27483c76a6d4071bfb6538a1855a451(event)'>1) When member already login</div>");
function u108Clickud27483c76a6d4071bfb6538a1855a451(e)
{

	self.location.href="After-login-page[My-WBA].html" + GetQuerystring();

	ToggleLinks(e, 'u108LinksClick');
}

InsertBeforeEnd(u108LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u108Clickuc9fd9d6f8d824e7ba3864ee13fe0dfcb(event)'>2) When member not login </div>");
function u108Clickuc9fd9d6f8d824e7ba3864ee13fe0dfcb(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u108LinksClick');
}

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u177 = document.getElementById('u177');

x = 0;
y = 0;
InsertAfterBegin(u177ann, "<div id='u177Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u177', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u177').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u177based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u177base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u177based = document.getElementById('u177based');
            
InsertBeforeEnd(u177based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> The member redirected to the blog post page<BR><BR></div>");

u177.style.cursor = 'pointer';
if (bIE) u177.attachEvent("onclick", Clicku177);
else u177.addEventListener("click", Clicku177, true);
function Clicku177(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u177'] = 'top';
var u37 = document.getElementById('u37');

x = 0;
y = 0;
InsertAfterBegin(u37ann, "<div id='u37Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u37', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u37').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u37based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u37base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u37based = document.getElementById('u37based');
            
InsertBeforeEnd(u37based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirects the member to FYP page<BR><BR></div>");

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{

if (true) {

	self.location.href="Forgot-your-password-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u37'] = 'top';
var u3 = document.getElementById('u3');

var u105 = document.getElementById('u105');

var u68 = document.getElementById('u68');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u21 = document.getElementById('u21');

var u113 = document.getElementById('u113');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u194 = document.getElementById('u194');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u126 = document.getElementById('u126');

var u170 = document.getElementById('u170');

x = 0;
y = 0;
InsertAfterBegin(u170ann, "<div id='u170Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u170', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u170').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u170based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u170base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u170based = document.getElementById('u170based');
            
InsertBeforeEnd(u170based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect the member to the read the listing.<BR><BR></div>");

u170.style.cursor = 'pointer';
if (bIE) u170.attachEvent("onclick", Clicku170);
else u170.addEventListener("click", Clicku170, true);
function Clicku170(e)
{

if (true) {

	self.location.href="Member-click-listing.html" + GetQuerystring();

}

}
gv_vAlignTable['u170'] = 'top';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u97 = document.getElementById('u97');

x = 0;
y = 0;
InsertAfterBegin(u97ann, "<div id='u97Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u97', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u97').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u97based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u97base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u97based = document.getElementById('u97based');
            
InsertBeforeEnd(u97based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member redirected to the directory page<BR><BR></div>");

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{

if (true) {

	self.location.href=PageUrl + GetQuerystring();
    window.location.reload();

}

}

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u182 = document.getElementById('u182');

var u46 = document.getElementById('u46');

var u81 = document.getElementById('u81');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u30 = document.getElementById('u30');

var u77 = document.getElementById('u77');

var u152 = document.getElementById('u152');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u168 = document.getElementById('u168');

x = 0;
y = 0;
InsertAfterBegin(u168ann, "<div id='u168Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u168', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u168').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u168based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u168base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u168based = document.getElementById('u168based');
            
InsertBeforeEnd(u168based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> The member redirected to the blog post page<BR><BR></div>");

u168.style.cursor = 'pointer';
if (bIE) u168.attachEvent("onclick", Clicku168);
else u168.addEventListener("click", Clicku168, true);
function Clicku168(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u168'] = 'top';
var u7 = document.getElementById('u7');

var u13 = document.getElementById('u13');

var u95 = document.getElementById('u95');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u4 = document.getElementById('u4');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u148 = document.getElementById('u148');

var u58 = document.getElementById('u58');

x = 0;
y = 0;
InsertAfterBegin(u58ann, "<div id='u58Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u58', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u58').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u58based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u58base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u58based = document.getElementById('u58based');
            
InsertBeforeEnd(u58based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicked this link, the profile of ours in Linkedin is shown to the user.<BR><BR></div>");

u58.style.cursor = 'pointer';
if (bIE) u58.attachEvent("onclick", Clicku58);
else u58.addEventListener("click", Clicku58, true);
function Clicku58(e)
{

if (true) {

	self.location.href="Member-click-linked-in-button.html" + GetQuerystring();

}

}

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u42 = document.getElementById('u42');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u191 = document.getElementById('u191');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u169 = document.getElementById('u169');

x = 0;
y = 0;
InsertAfterBegin(u169ann, "<div id='u169Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u169', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u169').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u169based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u169base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u169based = document.getElementById('u169based');
            
InsertBeforeEnd(u169based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can save this particular blog post to his My web business. But he should be login to save this post, otherwise he is redirect to the login page.<BR><BR></div>");

u169.style.cursor = 'pointer';
if (bIE) u169.attachEvent("onclick", u169Click);
else u169.addEventListener("click", u169Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u169LinksClick'></DIV>")
var u169LinksClick = document.getElementById('u169LinksClick');
function u169Click(e) 
{

	ToggleLinks(e, 'u169LinksClick');
}

InsertBeforeEnd(u169LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u169Clickuc71b4a48ca7b4a9eb36110528d846c8a(event)'>1) When member is already login</div>");
function u169Clickuc71b4a48ca7b4a9eb36110528d846c8a(e)
{

	self.location.href="Reader-My-Saved-Blogposts.html" + GetQuerystring();

	ToggleLinks(e, 'u169LinksClick');
}

InsertBeforeEnd(u169LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u169Clickuc0a24bbb21df4dfeab08fbcf9237c874(event)'>2) If member is not login </div>");
function u169Clickuc0a24bbb21df4dfeab08fbcf9237c874(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u169LinksClick');
}
gv_vAlignTable['u169'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');

var u120 = document.getElementById('u120');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u8 = document.getElementById('u8');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u171 = document.getElementById('u171');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u67 = document.getElementById('u67');

var u52 = document.getElementById('u52');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u6 = document.getElementById('u6');

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u85 = document.getElementById('u85');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u34 = document.getElementById('u34');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u99 = document.getElementById('u99');

var u17 = document.getElementById('u17');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');

var u48 = document.getElementById('u48');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u79 = document.getElementById('u79');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u80 = document.getElementById('u80');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u158 = document.getElementById('u158');

var u101 = document.getElementById('u101');

x = 0;
y = 0;
InsertAfterBegin(u101ann, "<div id='u101Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u101', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u101').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u101based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u101base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u101based = document.getElementById('u101based');
            
InsertBeforeEnd(u101based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> User redirected to the home page<BR><BR></div>");

u101.style.cursor = 'pointer';
if (bIE) u101.attachEvent("onclick", Clicku101);
else u101.addEventListener("click", Clicku101, true);
function Clicku101(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u101'] = 'top';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u117 = document.getElementById('u117');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u43 = document.getElementById('u43');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u89 = document.getElementById('u89');

x = 0;
y = 0;
InsertAfterBegin(u89ann, "<div id='u89Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u89', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u89').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u89based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u89base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u89based = document.getElementById('u89based');
            
InsertBeforeEnd(u89based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives Contact page to the member<BR><BR></div>");

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{

if (true) {

	self.location.href="Contact-us-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u89'] = 'top';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u124 = document.getElementById('u124');

var u74 = document.getElementById('u74');

var u122 = document.getElementById('u122');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u92 = document.getElementById('u92');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u41 = document.getElementById('u41');

x = 0;
y = 0;
InsertAfterBegin(u41ann, "<div id='u41Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u41', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u41').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u41based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u41base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u41based = document.getElementById('u41based');
            
InsertBeforeEnd(u41based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirects the member to Registration page<BR><BR></div>");

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", Clicku41);
else u41.addEventListener("click", Clicku41, true);
function Clicku41(e)
{

if (true) {

	self.location.href="Registeration-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u41'] = 'top';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u24 = document.getElementById('u24');

var u72 = document.getElementById('u72');

var u102 = document.getElementById('u102');

x = 0;
y = 0;
InsertAfterBegin(u102ann, "<div id='u102Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u102', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u102').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u102based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u102base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u102based = document.getElementById('u102based');
            
InsertBeforeEnd(u102based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicks the logo, it redirects the user to the Home page of the application<BR><BR></div>");

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u118 = document.getElementById('u118');

var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');

var u38 = document.getElementById('u38');

var u83 = document.getElementById('u83');

var u110 = document.getElementById('u110');

var u86 = document.getElementById('u86');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u22 = document.getElementById('u22');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u186 = document.getElementById('u186');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u133 = document.getElementById('u133');

x = 0;
y = 0;
InsertAfterBegin(u133ann, "<div id='u133Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u133', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u133').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u133based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u133base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u133based = document.getElementById('u133based');
            
InsertBeforeEnd(u133based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect the member to the read the listing.<BR><BR></div>");

u133.style.cursor = 'pointer';
if (bIE) u133.attachEvent("onclick", Clicku133);
else u133.addEventListener("click", Clicku133, true);
function Clicku133(e)
{

if (true) {

	self.location.href="Member-click-listing.html" + GetQuerystring();

}

}
gv_vAlignTable['u133'] = 'top';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u50 = document.getElementById('u50');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u15 = document.getElementById('u15');

var u33 = document.getElementById('u33');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u192 = document.getElementById('u192');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u47 = document.getElementById('u47');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u116 = document.getElementById('u116');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u31 = document.getElementById('u31');

x = 0;
y = 0;
InsertAfterBegin(u31ann, "<div id='u31Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u31', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u31').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u31based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u31base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u31based = document.getElementById('u31based');
            
InsertBeforeEnd(u31based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member wants to login to the application,<BR><BR></div>");

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", u31Click);
else u31.addEventListener("click", u31Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u31LinksClick'></DIV>")
var u31LinksClick = document.getElementById('u31LinksClick');
function u31Click(e) 
{

	ToggleLinks(e, 'u31LinksClick');
}

InsertBeforeEnd(u31LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u31Clicku01d31fb5df994f8a8596e0c2c2a55755(event)'>1) When user gives valid credentials  & Member</div>");
function u31Clicku01d31fb5df994f8a8596e0c2c2a55755(e)
{

	self.location.href="After-login-page[My-WBA].html" + GetQuerystring();

	ToggleLinks(e, 'u31LinksClick');
}

InsertBeforeEnd(u31LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u31Clicku4db4cb03247b431c9ddb9d6e51c40e69(event)'>2) When user gives valid credentials & Advertiser</div>");
function u31Clicku4db4cb03247b431c9ddb9d6e51c40e69(e)
{

	self.location.href="#" + GetQuerystring();

	ToggleLinks(e, 'u31LinksClick');
}

InsertBeforeEnd(u31LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u31Clicku489eeb3387cb4bd196116eeea16c66ba(event)'>3) When user gives invalid credentials</div>");
function u31Clicku489eeb3387cb4bd196116eeea16c66ba(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u31LinksClick');
}

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u162 = document.getElementById('u162');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u178 = document.getElementById('u178');

x = 0;
y = 0;
InsertAfterBegin(u178ann, "<div id='u178Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u178', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u178').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u178based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u178base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u178based = document.getElementById('u178based');
            
InsertBeforeEnd(u178based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can save this particular blog post to his My web business. But he should be login to save this post, otherwise he is redirect to the login page.<BR><BR></div>");

u178.style.cursor = 'pointer';
if (bIE) u178.attachEvent("onclick", u178Click);
else u178.addEventListener("click", u178Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u178LinksClick'></DIV>")
var u178LinksClick = document.getElementById('u178LinksClick');
function u178Click(e) 
{

	ToggleLinks(e, 'u178LinksClick');
}

InsertBeforeEnd(u178LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u178Clicku556588d766d54a5c8ce6c02941b5cc67(event)'>1) When member is already login</div>");
function u178Clicku556588d766d54a5c8ce6c02941b5cc67(e)
{

	self.location.href="Reader-My-Saved-Blogposts.html" + GetQuerystring();

	ToggleLinks(e, 'u178LinksClick');
}

InsertBeforeEnd(u178LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u178Clicku3b24b6facbc645fca36f459227120337(event)'>2) If member is not login </div>");
function u178Clicku3b24b6facbc645fca36f459227120337(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u178LinksClick');
}
gv_vAlignTable['u178'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
if (window.OnLoad) OnLoad();
