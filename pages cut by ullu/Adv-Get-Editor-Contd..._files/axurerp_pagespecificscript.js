
var PageName = 'Adv-Get-Editor-Contd...';
var PageId = 'p8a6105dba5cb4b429a661adb7b1257a9'
var PageUrl = 'Adv-Get-Editor-Contd....html'
document.title = 'Adv-Get-Editor-Contd...';

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

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u83 = document.getElementById('u83');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u79 = document.getElementById('u79');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u80 = document.getElementById('u80');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
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

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u67 = document.getElementById('u67');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u73 = document.getElementById('u73');

var u48 = document.getElementById('u48');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
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
gv_vAlignTable['u70'] = 'top';
var u39 = document.getElementById('u39');

x = 0;
y = 0;
InsertAfterBegin(u39ann, "<div id='u39Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u39', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u39').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u39based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u39base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u39based = document.getElementById('u39based');
            
InsertBeforeEnd(u39based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect the member to the &quot;My Saved Blogposts&quot; page<BR><BR></div>");

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{

if (true) {

	self.location.href="Reader-My-Saved-Blogposts.html" + GetQuerystring();

}

}
gv_vAlignTable['u39'] = 'top';
var u87 = document.getElementById('u87');

x = 0;
y = 0;
InsertAfterBegin(u87ann, "<div id='u87Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u87', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u87').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u87based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u87base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u87based = document.getElementById('u87based');
            
InsertBeforeEnd(u87based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Adv. Member can view all the listings that are posted by him<BR><BR></div>");

u87.style.cursor = 'pointer';
if (bIE) u87.attachEvent("onclick", Clicku87);
else u87.addEventListener("click", Clicku87, true);
function Clicku87(e)
{

if (true) {

	self.location.href="Adv-My-submitted-listings.html" + GetQuerystring();

}

}

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u61 = document.getElementById('u61');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u52 = document.getElementById('u52');

var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{

if (true) {

	self.location.href="Adv-My-submitted-listings.html" + GetQuerystring();

}

}
gv_vAlignTable['u90'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u89 = document.getElementById('u89');

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{

if (true) {

	self.location.href="Adv-My-submitted-listings.html" + GetQuerystring();

}

}

var u81 = document.getElementById('u81');

x = 0;
y = 0;
InsertAfterBegin(u81ann, "<div id='u81Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u81', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u81').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u81based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u81base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u81based = document.getElementById('u81based');
            
InsertBeforeEnd(u81based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Adv. member can anytime get a Editor from WBA<BR><BR></div>");

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{

if (true) {

	self.location.href="Adv-Submit-Sponsored-listing.html" + GetQuerystring();

}

}

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u33 = document.getElementById('u33');

var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u15 = document.getElementById('u15');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u49 = document.getElementById('u49');

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
gv_vAlignTable['u65'] = 'top';
var u71 = document.getElementById('u71');

var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{

if (true) {

	self.location.href="Adv-Submit-Sponsored-listing.html" + GetQuerystring();

}

}

var u62 = document.getElementById('u62');

var u46 = document.getElementById('u46');

var u85 = document.getElementById('u85');

var u91 = document.getElementById('u91');

var u37 = document.getElementById('u37');

var u43 = document.getElementById('u43');

var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u40 = document.getElementById('u40');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u25 = document.getElementById('u25');

var u31 = document.getElementById('u31');

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
gv_vAlignTable['u75'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u8 = document.getElementById('u8');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u56 = document.getElementById('u56');

var u95 = document.getElementById('u95');

u95.style.cursor = 'pointer';
if (bIE) u95.attachEvent("onclick", Clicku95);
else u95.addEventListener("click", Clicku95, true);
function Clicku95(e)
{

if (true) {

	self.location.href="Adv-Submit-Sponsored-listing.html" + GetQuerystring();

}

}
gv_vAlignTable['u95'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u28 = document.getElementById('u28');

var u92 = document.getElementById('u92');

x = 0;
y = 0;
InsertAfterBegin(u92ann, "<div id='u92Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u92', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u92').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u92based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u92base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u92based = document.getElementById('u92based');
            
InsertBeforeEnd(u92based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Adv. Member can submit listing<BR><BR></div>");

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{

if (true) {

	self.location.href="Adv-Submit-Sponsored-listing.html" + GetQuerystring();

}

}

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

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u19 = document.getElementById('u19');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u7 = document.getElementById('u7');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u32 = document.getElementById('u32');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
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

var u13 = document.getElementById('u13');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u35 = document.getElementById('u35');

x = 0;
y = 0;
InsertAfterBegin(u35ann, "<div id='u35Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u35', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u35').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u35based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u35base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u35based = document.getElementById('u35based');
            
InsertBeforeEnd(u35based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect the member to the &quot;Saved Listings&quot; page<BR><BR></div>");

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{

if (true) {

	self.location.href="Reader-My-Saved-listings.html" + GetQuerystring();

}

}
gv_vAlignTable['u35'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u63 = document.getElementById('u63');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
if (window.OnLoad) OnLoad();
