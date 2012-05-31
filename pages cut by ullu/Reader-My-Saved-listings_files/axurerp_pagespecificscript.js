
var PageName = 'Reader-My-Saved-listings';
var PageId = 'p223fdfc2cd8c457abd7b2f190e695ed8'
var PageUrl = 'Reader-My-Saved-listings.html'
document.title = 'Reader-My-Saved-listings';

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
gv_vAlignTable['u86'] = 'center';
var u54 = document.getElementById('u54');

var u138 = document.getElementById('u138');

var u60 = document.getElementById('u60');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u115 = document.getElementById('u115');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u45 = document.getElementById('u45');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u96 = document.getElementById('u96');

var u79 = document.getElementById('u79');

var u139 = document.getElementById('u139');

x = 0;
y = 0;
InsertAfterBegin(u139ann, "<div id='u139Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u139', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u139').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u139based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u139base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u139based = document.getElementById('u139based');
            
InsertBeforeEnd(u139based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect the member to the read the listing.<BR><BR></div>");

u139.style.cursor = 'pointer';
if (bIE) u139.attachEvent("onclick", Clicku139);
else u139.addEventListener("click", Clicku139, true);
function Clicku139(e)
{

if (true) {

	self.location.href="Member-click-listing.html" + GetQuerystring();

}

}
gv_vAlignTable['u139'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u106 = document.getElementById('u106');

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
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

var u142 = document.getElementById('u142');

x = 0;
y = 0;
InsertAfterBegin(u142ann, "<div id='u142Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u142', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u142').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u142based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u142base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u142based = document.getElementById('u142based');
            
InsertBeforeEnd(u142based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect the member to the read the listing.<BR><BR></div>");

u142.style.cursor = 'pointer';
if (bIE) u142.attachEvent("onclick", Clicku142);
else u142.addEventListener("click", Clicku142, true);
function Clicku142(e)
{

if (true) {

	self.location.href="Member-click-listing.html" + GetQuerystring();

}

}
gv_vAlignTable['u142'] = 'top';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u110 = document.getElementById('u110');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u67 = document.getElementById('u67');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u141 = document.getElementById('u141');

x = 0;
y = 0;
InsertAfterBegin(u141ann, "<div id='u141Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u141', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u141').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u141based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u141base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u141based = document.getElementById('u141based');
            
InsertBeforeEnd(u141based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect the member to the read the listing.<BR><BR></div>");

u141.style.cursor = 'pointer';
if (bIE) u141.attachEvent("onclick", Clicku141);
else u141.addEventListener("click", Clicku141, true);
function Clicku141(e)
{

if (true) {

	self.location.href="Member-click-listing.html" + GetQuerystring();

}

}
gv_vAlignTable['u141'] = 'top';
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
gv_vAlignTable['u64'] = 'center';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u39 = document.getElementById('u39');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u133 = document.getElementById('u133');

var u119 = document.getElementById('u119');

var u87 = document.getElementById('u87');

x = 0;
y = 0;
InsertAfterBegin(u87ann, "<div id='u87Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u87', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u87').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u87based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u87base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u87based = document.getElementById('u87based');
            
InsertBeforeEnd(u87based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicked this link, the profile of ours in Linkedin is shown to the user.<BR><BR></div>");

u87.style.cursor = 'pointer';
if (bIE) u87.attachEvent("onclick", Clicku87);
else u87.addEventListener("click", Clicku87, true);
function Clicku87(e)
{

if (true) {

	self.location.href="Member-click-linked-in-button.html" + GetQuerystring();

}

}

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u61 = document.getElementById('u61');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u103 = document.getElementById('u103');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u84 = document.getElementById('u84');

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u36 = document.getElementById('u36');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u81 = document.getElementById('u81');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
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

var u101 = document.getElementById('u101');

var u168 = document.getElementById('u168');

x = 0;
y = 0;
InsertAfterBegin(u168ann, "<div id='u168Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u168', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u168').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u168based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u168base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u168based = document.getElementById('u168based');
            
InsertBeforeEnd(u168based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect the member to the &quot;My Saved Blogposts&quot; page<BR><BR></div>");

u168.style.cursor = 'pointer';
if (bIE) u168.attachEvent("onclick", Clicku168);
else u168.addEventListener("click", Clicku168, true);
function Clicku168(e)
{

if (true) {

	self.location.href="Reader-My-Saved-Blogposts.html" + GetQuerystring();

}

}
gv_vAlignTable['u168'] = 'top';
var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');

var u77 = document.getElementById('u77');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u166 = document.getElementById('u166');

var u15 = document.getElementById('u15');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u159 = document.getElementById('u159');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
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

var u160 = document.getElementById('u160');

var u156 = document.getElementById('u156');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u130 = document.getElementById('u130');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u94 = document.getElementById('u94');

var u62 = document.getElementById('u62');

var u137 = document.getElementById('u137');

x = 0;
y = 0;
InsertAfterBegin(u137ann, "<div id='u137Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u137', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u137').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u137based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u137base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u137based = document.getElementById('u137based');
            
InsertBeforeEnd(u137based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect the member to the read the listing.<BR><BR></div>");

u137.style.cursor = 'pointer';
if (bIE) u137.attachEvent("onclick", Clicku137);
else u137.addEventListener("click", Clicku137, true);
function Clicku137(e)
{

if (true) {

	self.location.href="Member-click-listing.html" + GetQuerystring();

}

}
gv_vAlignTable['u137'] = 'top';
var u147 = document.getElementById('u147');

x = 0;
y = 0;
InsertAfterBegin(u147ann, "<div id='u147Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u147', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u147').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u147based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u147base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u147based = document.getElementById('u147based');
            
InsertBeforeEnd(u147based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect the member to the read the listing.<BR><BR></div>");

u147.style.cursor = 'pointer';
if (bIE) u147.attachEvent("onclick", Clicku147);
else u147.addEventListener("click", Clicku147, true);
function Clicku147(e)
{

if (true) {

	self.location.href="Member-click-listing.html" + GetQuerystring();

}

}
gv_vAlignTable['u147'] = 'top';
var u46 = document.getElementById('u46');

var u126 = document.getElementById('u126');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u85 = document.getElementById('u85');

var u120 = document.getElementById('u120');

var u91 = document.getElementById('u91');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u135 = document.getElementById('u135');

x = 0;
y = 0;
InsertAfterBegin(u135ann, "<div id='u135Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u135', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u135').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u135based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u135base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u135based = document.getElementById('u135based');
            
InsertBeforeEnd(u135based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect the member to the read the listing.<BR><BR></div>");

u135.style.cursor = 'pointer';
if (bIE) u135.attachEvent("onclick", Clicku135);
else u135.addEventListener("click", Clicku135, true);
function Clicku135(e)
{

if (true) {

	self.location.href="Member-click-listing.html" + GetQuerystring();

}

}
gv_vAlignTable['u135'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u150 = document.getElementById('u150');

u150.style.cursor = 'pointer';
if (bIE) u150.attachEvent("onclick", Clicku150);
else u150.addEventListener("click", Clicku150, true);
function Clicku150(e)
{

if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u25 = document.getElementById('u25');

var u31 = document.getElementById('u31');

var u97 = document.getElementById('u97');

var u59 = document.getElementById('u59');

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

var u88 = document.getElementById('u88');

x = 0;
y = 0;
InsertAfterBegin(u88ann, "<div id='u88Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u88', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u88').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u88based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u88base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u88based = document.getElementById('u88based');
            
InsertBeforeEnd(u88based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can view the public profile page of WBA in twitter<BR><BR></div>");

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

	self.location.href="Member-click-Twitter-button.html" + GetQuerystring();

}

}

var u8 = document.getElementById('u8');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u112 = document.getElementById('u112');

var u72 = document.getElementById('u72');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u144 = document.getElementById('u144');

x = 0;
y = 0;
InsertAfterBegin(u144ann, "<div id='u144Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u144', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u144').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u144based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u144base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u144based = document.getElementById('u144based');
            
InsertBeforeEnd(u144based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect the member to the read the listing.<BR><BR></div>");

u144.style.cursor = 'pointer';
if (bIE) u144.attachEvent("onclick", Clicku144);
else u144.addEventListener("click", Clicku144, true);
function Clicku144(e)
{

if (true) {

	self.location.href="Member-click-listing.html" + GetQuerystring();

}

}
gv_vAlignTable['u144'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u122 = document.getElementById('u122');

var u108 = document.getElementById('u108');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u47 = document.getElementById('u47');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u114 = document.getElementById('u114');

var u28 = document.getElementById('u28');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
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

var u50 = document.getElementById('u50');

var u19 = document.getElementById('u19');

var u167 = document.getElementById('u167');

x = 0;
y = 0;
InsertAfterBegin(u167ann, "<div id='u167Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u167', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u167').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u167based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u167base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u167based = document.getElementById('u167based');
            
InsertBeforeEnd(u167based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect the member to the &quot;Saved Listings&quot; page<BR><BR></div>");

u167.style.cursor = 'pointer';
if (bIE) u167.attachEvent("onclick", Clicku167);
else u167.addEventListener("click", Clicku167, true);
function Clicku167(e)
{

if (true) {

	self.location.href=PageUrl + GetQuerystring();
    window.location.reload();

}

}
gv_vAlignTable['u167'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u7 = document.getElementById('u7');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
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
gv_vAlignTable['u162'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u13 = document.getElementById('u13');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u148 = document.getElementById('u148');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u63 = document.getElementById('u63');

var u163 = document.getElementById('u163');

var u145 = document.getElementById('u145');

x = 0;
y = 0;
InsertAfterBegin(u145ann, "<div id='u145Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u145', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u145').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u145based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u145base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u145based = document.getElementById('u145based');
            
InsertBeforeEnd(u145based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect the member to the read the listing.<BR><BR></div>");

u145.style.cursor = 'pointer';
if (bIE) u145.attachEvent("onclick", Clicku145);
else u145.addEventListener("click", Clicku145, true);
function Clicku145(e)
{

if (true) {

	self.location.href="Member-click-listing.html" + GetQuerystring();

}

}
gv_vAlignTable['u145'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u118 = document.getElementById('u118');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
if (window.OnLoad) OnLoad();
