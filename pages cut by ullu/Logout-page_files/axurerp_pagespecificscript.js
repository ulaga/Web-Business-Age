
var PageName = 'Logout-page';
var PageId = 'p69046c561b3c4b02a76b3d0daf005235'
var PageUrl = 'Logout-page.html'
document.title = 'Logout-page';

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

var u20 = document.getElementById('u20');

x = 0;
y = 0;
InsertAfterBegin(u20ann, "<div id='u20Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u20', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u20').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u20based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u20base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u20based = document.getElementById('u20based');
            
InsertBeforeEnd(u20based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives Advertise page to the member<BR><BR></div>");

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{

if (true) {

	self.location.href="Advertise-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u20'] = 'top';
var u51 = document.getElementById('u51');

var u36 = document.getElementById('u36');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u45 = document.getElementById('u45');

var u11 = document.getElementById('u11');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{

if (true) {

	self.location.href="Login-page.html" + GetQuerystring();

}

}

var u0 = document.getElementById('u0');

var u26 = document.getElementById('u26');

x = 0;
y = 0;
InsertAfterBegin(u26ann, "<div id='u26Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u26', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u26').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u26based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u26base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u26based = document.getElementById('u26based');
            
InsertBeforeEnd(u26based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> On click member can view the blog page<BR><BR></div>");

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{

if (true) {

	self.location.href="Blog-page.html" + GetQuerystring();

}

}

var u49 = document.getElementById('u49');

x = 0;
y = 0;
InsertAfterBegin(u49ann, "<div id='u49Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u49', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u49').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u49based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u49base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u49based = document.getElementById('u49based');
            
InsertBeforeEnd(u49based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirects the member to &quot;Privacy Policy&quot; page.<BR><BR></div>");

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{

if (true) {

	self.location.href="" + "";

}

}
gv_vAlignTable['u49'] = 'top';
var u35 = document.getElementById('u35');

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{

if (true) {

	self.location.href="Directory-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u35'] = 'top';
var u29 = document.getElementById('u29');

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{

if (true) {

	self.location.href="Blog-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u29'] = 'top';
var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u34 = document.getElementById('u34');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u48 = document.getElementById('u48');

x = 0;
y = 0;
InsertAfterBegin(u48ann, "<div id='u48Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u48', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u48').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u48based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u48base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u48based = document.getElementById('u48based');
            
InsertBeforeEnd(u48based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirects the member to &quot;Terms of Service&quot; page.<BR><BR></div>");

u48.style.cursor = 'pointer';
if (bIE) u48.attachEvent("onclick", Clicku48);
else u48.addEventListener("click", Clicku48, true);
function Clicku48(e)
{

if (true) {

	self.location.href="" + "";

}

}
gv_vAlignTable['u48'] = 'top';
var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{

if (true) {

	self.location.href="Blog-page.html" + GetQuerystring();

}

}

var u44 = document.getElementById('u44');

x = 0;
y = 0;
InsertAfterBegin(u44ann, "<div id='u44Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u44', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u44').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u44based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u44base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u44based = document.getElementById('u44based');
            
InsertBeforeEnd(u44based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirects the member to &quot;Contact Us&quot; page.<BR><BR></div>");

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{

if (true) {

	self.location.href="#" + GetQuerystring();

}

}
gv_vAlignTable['u44'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u50 = document.getElementById('u50');

var u22 = document.getElementById('u22');

var u52 = document.getElementById('u52');

var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u47 = document.getElementById('u47');

x = 0;
y = 0;
InsertAfterBegin(u47ann, "<div id='u47Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u47', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u47').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u47based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u47base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u47based = document.getElementById('u47based');
            
InsertBeforeEnd(u47based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirects the member to &quot;Sitemap&quot; page.<BR><BR></div>");

u47.style.cursor = 'pointer';
if (bIE) u47.attachEvent("onclick", Clicku47);
else u47.addEventListener("click", Clicku47, true);
function Clicku47(e)
{

if (true) {

	self.location.href="" + "";

}

}
gv_vAlignTable['u47'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u41 = document.getElementById('u41');

var u53 = document.getElementById('u53');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}
gv_vAlignTable['u7'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u5 = document.getElementById('u5');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u3 = document.getElementById('u3');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u25 = document.getElementById('u25');

var u43 = document.getElementById('u43');

x = 0;
y = 0;
InsertAfterBegin(u43ann, "<div id='u43Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u43', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u43').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u43based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u43base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u43based = document.getElementById('u43based');
            
InsertBeforeEnd(u43based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirects the member to About Us page.<BR><BR></div>");

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{

if (true) {

	self.location.href="" + "";

}

}
gv_vAlignTable['u43'] = 'top';
var u16 = document.getElementById('u16');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u19 = document.getElementById('u19');

x = 0;
y = 0;
InsertAfterBegin(u19ann, "<div id='u19Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u19', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u19').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u19based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u19base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u19based = document.getElementById('u19based');
            
InsertBeforeEnd(u19based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives Contact page to the member<BR><BR></div>");

u19.style.cursor = 'pointer';
if (bIE) u19.attachEvent("onclick", Clicku19);
else u19.addEventListener("click", Clicku19, true);
function Clicku19(e)
{

if (true) {

	self.location.href="Contact-us-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u19'] = 'top';
var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

	self.location.href="Login-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u9'] = 'top';
var u30 = document.getElementById('u30');

var u24 = document.getElementById('u24');

var u46 = document.getElementById('u46');

x = 0;
y = 0;
InsertAfterBegin(u46ann, "<div id='u46Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u46', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u46').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u46based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u46base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u46based = document.getElementById('u46based');
            
InsertBeforeEnd(u46based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirects the member to &quot;Advertise&quot; page.<BR><BR></div>");

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", Clicku46);
else u46.addEventListener("click", Clicku46, true);
function Clicku46(e)
{

if (true) {

	self.location.href="" + "";

}

}
gv_vAlignTable['u46'] = 'top';
var u38 = document.getElementById('u38');

var u18 = document.getElementById('u18');

x = 0;
y = 0;
InsertAfterBegin(u18ann, "<div id='u18Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u18', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u18').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u18based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u18base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u18based = document.getElementById('u18based');
            
InsertBeforeEnd(u18based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives About page to the member<BR><BR></div>");

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{

if (true) {

	self.location.href="About-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u18'] = 'top';
var u32 = document.getElementById('u32');

x = 0;
y = 0;
InsertAfterBegin(u32ann, "<div id='u32Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u32', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u32').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u32based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u32base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u32based = document.getElementById('u32based');
            
InsertBeforeEnd(u32based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can view the directory listing page<BR><BR></div>");

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{

if (true) {

	self.location.href="Directory-page.html" + GetQuerystring();

}

}

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
if (window.OnLoad) OnLoad();
