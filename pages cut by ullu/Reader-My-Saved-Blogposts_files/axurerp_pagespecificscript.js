
var PageName = 'Reader-My-Saved-Blogposts';
var PageId = 'pea516eaf851c474fb7a8dbc1dfa29028'
var PageUrl = 'Reader-My-Saved-Blogposts.html'
document.title = 'Reader-My-Saved-Blogposts';

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

var u109 = document.getElementById('u109');

var u86 = document.getElementById('u86');

var u54 = document.getElementById('u54');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u60 = document.getElementById('u60');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u115 = document.getElementById('u115');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u104 = document.getElementById('u104');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u83 = document.getElementById('u83');

var u51 = document.getElementById('u51');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u80 = document.getElementById('u80');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u99 = document.getElementById('u99');

var u5 = document.getElementById('u5');

var u23 = document.getElementById('u23');

x = 0;
y = 0;
InsertAfterBegin(u23ann, "<div id='u23Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u23', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u23').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u23based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u23base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u23based = document.getElementById('u23based');
            
InsertBeforeEnd(u23based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can logout from the application at any time.<BR><BR></div>");

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u23'] = 'top';
var u76 = document.getElementById('u76');

x = 0;
y = 0;
InsertAfterBegin(u76ann, "<div id='u76Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u76', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u76').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u76based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u76base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u76based = document.getElementById('u76based');
            
InsertBeforeEnd(u76based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicked this link, the profile of ours in Linkedin is shown to the user.<BR><BR></div>");

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{

if (true) {

	self.location.href="Member-click-linked-in-button.html" + GetQuerystring();

}

}

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u155 = document.getElementById('u155');

x = 0;
y = 0;
InsertAfterBegin(u155ann, "<div id='u155Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u155', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u155').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u155based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u155base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u155based = document.getElementById('u155based');
            
InsertBeforeEnd(u155based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicks the post the member can read the content<BR><BR></div>");

u155.style.cursor = 'pointer';
if (bIE) u155.attachEvent("onclick", Clicku155);
else u155.addEventListener("click", Clicku155, true);
function Clicku155(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u155'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u73 = document.getElementById('u73');

var u48 = document.getElementById('u48');

var u149 = document.getElementById('u149');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u141 = document.getElementById('u141');

var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

	self.location.href="After-login-Member-click_blog-page.html" + GetQuerystring();

}

}

var u64 = document.getElementById('u64');

var u70 = document.getElementById('u70');

var u39 = document.getElementById('u39');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u119 = document.getElementById('u119');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u61 = document.getElementById('u61');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u103 = document.getElementById('u103');

var u107 = document.getElementById('u107');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u52 = document.getElementById('u52');

var u90 = document.getElementById('u90');

var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u36 = document.getElementById('u36');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u33 = document.getElementById('u33');

x = 0;
y = 0;
InsertAfterBegin(u33ann, "<div id='u33Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u33', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u33').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u33based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u33base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u33based = document.getElementById('u33based');
            
InsertBeforeEnd(u33based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Breadcrumb Trail... Redirects the member to the Home page<BR><BR></div>");

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{

if (true) {

	self.location.href="After-login-page[My-WBA].html" + GetQuerystring();

}

}
gv_vAlignTable['u33'] = 'top';
var u154 = document.getElementById('u154');

x = 0;
y = 0;
InsertAfterBegin(u154ann, "<div id='u154Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u154', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u154').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u154based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u154base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u154based = document.getElementById('u154based');
            
InsertBeforeEnd(u154based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> The member redirected to the blog post page<BR><BR></div>");

u154.style.cursor = 'pointer';
if (bIE) u154.attachEvent("onclick", Clicku154);
else u154.addEventListener("click", Clicku154, true);
function Clicku154(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u154'] = 'top';
var u101 = document.getElementById('u101');

var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');

var u77 = document.getElementById('u77');

x = 0;
y = 0;
InsertAfterBegin(u77ann, "<div id='u77Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u77', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u77').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u77based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u77base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u77based = document.getElementById('u77based');
            
InsertBeforeEnd(u77based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can view the public profile page of WBA in twitter<BR><BR></div>");

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", Clicku77);
else u77.addEventListener("click", Clicku77, true);
function Clicku77(e)
{

if (true) {

	self.location.href="Member-click-Twitter-button.html" + GetQuerystring();

}

}

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u15 = document.getElementById('u15');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u74 = document.getElementById('u74');

var u49 = document.getElementById('u49');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{

if (true) {

	self.location.href="After-login-Member-click_blog-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u12'] = 'top';
var u65 = document.getElementById('u65');

var u128 = document.getElementById('u128');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u156 = document.getElementById('u156');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u137 = document.getElementById('u137');

var u147 = document.getElementById('u147');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u117 = document.getElementById('u117');

var u85 = document.getElementById('u85');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u43 = document.getElementById('u43');

var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u135 = document.getElementById('u135');

var u68 = document.getElementById('u68');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u25 = document.getElementById('u25');

var u31 = document.getElementById('u31');

var u97 = document.getElementById('u97');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u22 = document.getElementById('u22');

x = 0;
y = 0;
InsertAfterBegin(u22ann, "<div id='u22Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u22', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u22').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u22based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u22base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u22based = document.getElementById('u22based');
            
InsertBeforeEnd(u22based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirects to the Profile page of the member<BR><BR></div>");
gv_vAlignTable['u22'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u88 = document.getElementById('u88');

var u8 = document.getElementById('u8');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u129 = document.getElementById('u129');

var u56 = document.getElementById('u56');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u144 = document.getElementById('u144');

var u131 = document.getElementById('u131');

u131.style.cursor = 'pointer';
if (bIE) u131.attachEvent("onclick", Clicku131);
else u131.addEventListener("click", Clicku131, true);
function Clicku131(e)
{

if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u95 = document.getElementById('u95');

var u122 = document.getElementById('u122');

var u108 = document.getElementById('u108');

var u113 = document.getElementById('u113');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u127 = document.getElementById('u127');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u28 = document.getElementById('u28');

var u92 = document.getElementById('u92');

var u2 = document.getElementById('u2');

u2.style.cursor = 'pointer';
if (bIE) u2.attachEvent("onclick", Clicku2);
else u2.addEventListener("click", Clicku2, true);
function Clicku2(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u124 = document.getElementById('u124');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u50 = document.getElementById('u50');

var u19 = document.getElementById('u19');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u7 = document.getElementById('u7');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u111 = document.getElementById('u111');

var u161 = document.getElementById('u161');

x = 0;
y = 0;
InsertAfterBegin(u161ann, "<div id='u161Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u161', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u161').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u161based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u161base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u161based = document.getElementById('u161based');
            
InsertBeforeEnd(u161based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> The member redirected to the blog post page<BR><BR></div>");

u161.style.cursor = 'pointer';
if (bIE) u161.attachEvent("onclick", Clicku161);
else u161.addEventListener("click", Clicku161, true);
function Clicku161(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u161'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u98 = document.getElementById('u98');

var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

	self.location.href="After-login-Member-click_blog-page.html" + GetQuerystring();

}

}

var u162 = document.getElementById('u162');

x = 0;
y = 0;
InsertAfterBegin(u162ann, "<div id='u162Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u162', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u162').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u162based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u162base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u162based = document.getElementById('u162based');
            
InsertBeforeEnd(u162based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect the member to the &quot;Saved Listings&quot; page<BR><BR></div>");

u162.style.cursor = 'pointer';
if (bIE) u162.attachEvent("onclick", Clicku162);
else u162.addEventListener("click", Clicku162, true);
function Clicku162(e)
{

if (true) {

	self.location.href="Reader-My-Saved-listings.html" + GetQuerystring();

}

}
gv_vAlignTable['u162'] = 'top';
var u13 = document.getElementById('u13');

var u66 = document.getElementById('u66');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u148 = document.getElementById('u148');

x = 0;
y = 0;
InsertAfterBegin(u148ann, "<div id='u148Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u148', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u148').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u148based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u148base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u148based = document.getElementById('u148based');
            
InsertBeforeEnd(u148based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicks the post the member can read the content<BR><BR></div>");

u148.style.cursor = 'pointer';
if (bIE) u148.attachEvent("onclick", Clicku148);
else u148.addEventListener("click", Clicku148, true);
function Clicku148(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u148'] = 'top';
var u140 = document.getElementById('u140');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u163 = document.getElementById('u163');

x = 0;
y = 0;
InsertAfterBegin(u163ann, "<div id='u163Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u163', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u163').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u163based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u163base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u163based = document.getElementById('u163based');
            
InsertBeforeEnd(u163based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect the member to the &quot;My Saved Blogposts&quot; page<BR><BR></div>");

u163.style.cursor = 'pointer';
if (bIE) u163.attachEvent("onclick", Clicku163);
else u163.addEventListener("click", Clicku163, true);
function Clicku163(e)
{

if (true) {

	self.location.href=PageUrl + GetQuerystring();
    window.location.reload();

}

}
gv_vAlignTable['u163'] = 'top';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
if (window.OnLoad) OnLoad();
