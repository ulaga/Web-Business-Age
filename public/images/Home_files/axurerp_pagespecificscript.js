
var PageName = 'Home';
var PageId = 'p09104a73263142239548c4636bcf85c5'
var PageUrl = 'Home.html'
document.title = 'Home';

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

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u45 = document.getElementById('u45');

var u28 = document.getElementById('u28');

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u142 = document.getElementById('u142');

var u180 = document.getElementById('u180');

u180.style.cursor = 'pointer';
if (bIE) u180.attachEvent("onclick", Clicku180);
else u180.addEventListener("click", Clicku180, true);
function Clicku180(e)
{

if (true) {

	self.location.href="Blog-page.html" + GetQuerystring();

}

}

var u190 = document.getElementById('u190');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u104 = document.getElementById('u104');

var u93 = document.getElementById('u93');

var u12 = document.getElementById('u12');

var u73 = document.getElementById('u73');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u128 = document.getElementById('u128');

var u193 = document.getElementById('u193');

var u56 = document.getElementById('u56');

var u161 = document.getElementById('u161');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u206 = document.getElementById('u206');

x = 0;
y = 0;
InsertAfterBegin(u206ann, "<div id='u206Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u206', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u206').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u206based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u206base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u206based = document.getElementById('u206based');
            
InsertBeforeEnd(u206based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> By clcking the tag, the memer<BR><BR></div>");

u206.style.cursor = 'pointer';
if (bIE) u206.attachEvent("onclick", Clicku206);
else u206.addEventListener("click", Clicku206, true);
function Clicku206(e)
{

if (true) {

	self.location.href="User-click-any-tag.html" + GetQuerystring();

}

}
gv_vAlignTable['u206'] = 'top';
var u173 = document.getElementById('u173');

x = 0;
y = 0;
InsertAfterBegin(u173ann, "<div id='u173Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u173', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u173').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u173based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u173base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u173based = document.getElementById('u173based');
            
InsertBeforeEnd(u173based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives Advertise page to the member<BR><BR></div>");

u173.style.cursor = 'pointer';
if (bIE) u173.attachEvent("onclick", Clicku173);
else u173.addEventListener("click", Clicku173, true);
function Clicku173(e)
{

if (true) {

	self.location.href="Advertise-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u173'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u163 = document.getElementById('u163');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u130 = document.getElementById('u130');

var u108 = document.getElementById('u108');

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u54 = document.getElementById('u54');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u177 = document.getElementById('u177');

x = 0;
y = 0;
InsertAfterBegin(u177ann, "<div id='u177Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u177', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u177').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u177based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u177base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u177based = document.getElementById('u177based');
            
InsertBeforeEnd(u177based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can enter any search terms and clic<BR><BR></div>");

u177.style.cursor = 'pointer';
if (bIE) u177.attachEvent("onclick", Clicku177);
else u177.addEventListener("click", Clicku177, true);
function Clicku177(e)
{

if (true) {

	self.location.href="Search-Results-page.html" + GetQuerystring();

}

}

var u37 = document.getElementById('u37');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u3 = document.getElementById('u3');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u159 = document.getElementById('u159');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u113 = document.getElementById('u113');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u35 = document.getElementById('u35');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u126 = document.getElementById('u126');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u9 = document.getElementById('u9');

var u182 = document.getElementById('u182');

x = 0;
y = 0;
InsertAfterBegin(u182ann, "<div id='u182Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u182', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u182').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u182based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u182base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u182based = document.getElementById('u182based');
            
InsertBeforeEnd(u182based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect to hisMyWBA page when the member is already login, otherwise redirect him/her to the Login page<BR><BR></div>");

u182.style.cursor = 'pointer';
if (bIE) u182.attachEvent("onclick", u182Click);
else u182.addEventListener("click", u182Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u182LinksClick'></DIV>")
var u182LinksClick = document.getElementById('u182LinksClick');
function u182Click(e) 
{

	ToggleLinks(e, 'u182LinksClick');
}

InsertBeforeEnd(u182LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u182Clickuf26652fc77a44cf6a6d7c1700aae2109(event)'>1) When member already login</div>");
function u182Clickuf26652fc77a44cf6a6d7c1700aae2109(e)
{

	self.location.href="After-login-page[My-WBA].html" + GetQuerystring();

	ToggleLinks(e, 'u182LinksClick');
}

InsertBeforeEnd(u182LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u182Clicku5b543c87eb6f4a3cb48670af41a269b5(event)'>2) When member not login </div>");
function u182Clicku5b543c87eb6f4a3cb48670af41a269b5(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u182LinksClick');
}

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u233 = document.getElementById('u233');

x = 0;
y = 0;
InsertAfterBegin(u233ann, "<div id='u233Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u233', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u233').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u233based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u233base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u233based = document.getElementById('u233based');
            
InsertBeforeEnd(u233based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives Registration page to the member<BR><BR></div>");

u233.style.cursor = 'pointer';
if (bIE) u233.attachEvent("onclick", Clicku233);
else u233.addEventListener("click", Clicku233, true);
function Clicku233(e)
{

if (true) {

	self.location.href="Registeration-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u233'] = 'top';
var u172 = document.getElementById('u172');

x = 0;
y = 0;
InsertAfterBegin(u172ann, "<div id='u172Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u172', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u172').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u172based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u172base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u172based = document.getElementById('u172based');
            
InsertBeforeEnd(u172based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives Contact page to the member<BR><BR></div>");

u172.style.cursor = 'pointer';
if (bIE) u172.attachEvent("onclick", Clicku172);
else u172.addEventListener("click", Clicku172, true);
function Clicku172(e)
{

if (true) {

	self.location.href="Contact-us-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u172'] = 'top';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u30 = document.getElementById('u30');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
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
            
InsertBeforeEnd(u168based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicks the logo, it redirects the user to the Home page of the application<BR><BR></div>");

u168.style.cursor = 'pointer';
if (bIE) u168.attachEvent("onclick", Clicku168);
else u168.addEventListener("click", Clicku168, true);
function Clicku168(e)
{

if (true) {

	self.location.href=PageUrl + GetQuerystring();
    window.location.reload();

}

}

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u95 = document.getElementById('u95');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u44 = document.getElementById('u44');

var u165 = document.getElementById('u165');

var u181 = document.getElementById('u181');

u181.style.cursor = 'pointer';
if (bIE) u181.attachEvent("onclick", Clicku181);
else u181.addEventListener("click", Clicku181, true);
function Clicku181(e)
{

if (true) {

	self.location.href="Blog-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u181'] = 'top';
var u27 = document.getElementById('u27');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u148 = document.getElementById('u148');

var u58 = document.getElementById('u58');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u199 = document.getElementById('u199');

x = 0;
y = 0;
InsertAfterBegin(u199ann, "<div id='u199Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u199', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u199').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u199based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u199base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u199based = document.getElementById('u199based');
            
InsertBeforeEnd(u199based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member redirected to the directory page...<BR><BR></div>");

u199.style.cursor = 'pointer';
if (bIE) u199.attachEvent("onclick", Clicku199);
else u199.addEventListener("click", Clicku199, true);
function Clicku199(e)
{

if (true) {

	self.location.href="Directory-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u199'] = 'top';
var u42 = document.getElementById('u42');

var u145 = document.getElementById('u145');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u25 = document.getElementById('u25');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'top';
var u201 = document.getElementById('u201');

x = 0;
y = 0;
InsertAfterBegin(u201ann, "<div id='u201Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u201', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u201').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u201based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u201base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u201based = document.getElementById('u201based');
            
InsertBeforeEnd(u201based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member redirected to the blog page<BR><BR></div>");

u201.style.cursor = 'pointer';
if (bIE) u201.attachEvent("onclick", Clicku201);
else u201.addEventListener("click", Clicku201, true);
function Clicku201(e)
{

if (true) {

	self.location.href="Blog-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u201'] = 'top';
var u127 = document.getElementById('u127');

var u160 = document.getElementById('u160');

var u39 = document.getElementById('u39');

var u70 = document.getElementById('u70');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u187 = document.getElementById('u187');

u187.style.cursor = 'pointer';
if (bIE) u187.attachEvent("onclick", Clicku187);
else u187.addEventListener("click", Clicku187, true);
function Clicku187(e)
{

if (true) {

	self.location.href="Directory-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u187'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u53 = document.getElementById('u53');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u36 = document.getElementById('u36');

var u171 = document.getElementById('u171');

x = 0;
y = 0;
InsertAfterBegin(u171ann, "<div id='u171Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u171', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u171').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u171based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u171base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u171based = document.getElementById('u171based');
            
InsertBeforeEnd(u171based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives About page to the member<BR><BR></div>");

u171.style.cursor = 'pointer';
if (bIE) u171.attachEvent("onclick", Clicku171);
else u171.addEventListener("click", Clicku171, true);
function Clicku171(e)
{

if (true) {

	self.location.href="About-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u171'] = 'top';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u6 = document.getElementById('u6');

var u184 = document.getElementById('u184');

x = 0;
y = 0;
InsertAfterBegin(u184ann, "<div id='u184Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u184', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u184').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u184based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u184base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u184based = document.getElementById('u184based');
            
InsertBeforeEnd(u184based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can view the directory listing page<BR><BR></div>");

u184.style.cursor = 'pointer';
if (bIE) u184.attachEvent("onclick", Clicku184);
else u184.addEventListener("click", Clicku184, true);
function Clicku184(e)
{

if (true) {

	self.location.href="Directory-page.html" + GetQuerystring();

}

}

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u154 = document.getElementById('u154');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u48 = document.getElementById('u48');

var u121 = document.getElementById('u121');

x = 0;
y = 0;
InsertAfterBegin(u121ann, "<div id='u121Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u121', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u121').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u121based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u121base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u121based = document.getElementById('u121based');
            
InsertBeforeEnd(u121based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirects the member to Registration page<BR><BR></div>");

u121.style.cursor = 'pointer';
if (bIE) u121.attachEvent("onclick", Clicku121);
else u121.addEventListener("click", Clicku121, true);
function Clicku121(e)
{

if (true) {

	self.location.href="Registeration-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u121'] = 'top';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'top';
var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u203 = document.getElementById('u203');

x = 0;
y = 0;
InsertAfterBegin(u203ann, "<div id='u203Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u203', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u203').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u203based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u203base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u203based = document.getElementById('u203based');
            
InsertBeforeEnd(u203based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Gives Registration page to the member<BR><BR></div>");

u203.style.cursor = 'pointer';
if (bIE) u203.attachEvent("onclick", Clicku203);
else u203.addEventListener("click", Clicku203, true);
function Clicku203(e)
{

if (true) {

	self.location.href="Registeration-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u203'] = 'top';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'top';
var u79 = document.getElementById('u79');

var u188 = document.getElementById('u188');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u80 = document.getElementById('u80');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u51 = document.getElementById('u51');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u76 = document.getElementById('u76');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u101 = document.getElementById('u101');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u147 = document.getElementById('u147');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u117 = document.getElementById('u117');

x = 0;
y = 0;
InsertAfterBegin(u117ann, "<div id='u117Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u117', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u117').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u117based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u117base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u117based = document.getElementById('u117based');
            
InsertBeforeEnd(u117based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirects the member to FYP page<BR><BR></div>");

u117.style.cursor = 'pointer';
if (bIE) u117.attachEvent("onclick", Clicku117);
else u117.addEventListener("click", Clicku117, true);
function Clicku117(e)
{

if (true) {

	self.location.href="Forgot-your-password-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u117'] = 'top';
var u150 = document.getElementById('u150');

var u43 = document.getElementById('u43');

x = 0;
y = 0;
InsertAfterBegin(u43ann, "<div id='u43Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u43', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u43').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u43based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u43base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u43based = document.getElementById('u43based');
            
InsertBeforeEnd(u43based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Redirect the member to the blog post<BR><BR></div>");

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u43'] = 'top';
var u114 = document.getElementById('u114');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u174 = document.getElementById('u174');

var u26 = document.getElementById('u26');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u74 = document.getElementById('u74');

var u122 = document.getElementById('u122');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u138 = document.getElementById('u138');

x = 0;
y = 0;
InsertAfterBegin(u138ann, "<div id='u138Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u138', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u138').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u138based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u138base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u138based = document.getElementById('u138based');
            
InsertBeforeEnd(u138based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member clicked this link, the profile of ours in Linkedin is shown to the user.<BR><BR></div>");

u138.style.cursor = 'pointer';
if (bIE) u138.attachEvent("onclick", Clicku138);
else u138.addEventListener("click", Clicku138, true);
function Clicku138(e)
{

if (true) {

	self.location.href="Member-click-linked-in-button.html" + GetQuerystring();

}

}

var u136 = document.getElementById('u136');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u57 = document.getElementById('u57');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u135 = document.getElementById('u135');

var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u24 = document.getElementById('u24');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u102 = document.getElementById('u102');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'top';
var u118 = document.getElementById('u118');

var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u38 = document.getElementById('u38');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u110 = document.getElementById('u110');

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u123 = document.getElementById('u123');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u139 = document.getElementById('u139');

x = 0;
y = 0;
InsertAfterBegin(u139ann, "<div id='u139Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u139', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u139').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u139based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u139base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u139based = document.getElementById('u139based');
            
InsertBeforeEnd(u139based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member can view the public profile page of WBA in twitter<BR><BR></div>");

u139.style.cursor = 'pointer';
if (bIE) u139.attachEvent("onclick", Clicku139);
else u139.addEventListener("click", Clicku139, true);
function Clicku139(e)
{

if (true) {

	self.location.href="Member-click-Twitter-button.html" + GetQuerystring();

}

}

var u186 = document.getElementById('u186');

var u166 = document.getElementById('u166');

var u66 = document.getElementById('u66');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u19 = document.getElementById('u19');

var u50 = document.getElementById('u50');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u157 = document.getElementById('u157');

var u15 = document.getElementById('u15');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u230 = document.getElementById('u230');

x = 0;
y = 0;
InsertAfterBegin(u230ann, "<div id='u230Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u230', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u230').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u230based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u230base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u230based = document.getElementById('u230based');
            
InsertBeforeEnd(u230based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Member redirect to the blog post page<BR><BR></div>");

u230.style.cursor = 'pointer';
if (bIE) u230.attachEvent("onclick", Clicku230);
else u230.addEventListener("click", Clicku230, true);
function Clicku230(e)
{

if (true) {

	self.location.href="Individual-blog-post-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u230'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u119 = document.getElementById('u119');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u111 = document.getElementById('u111');

x = 0;
y = 0;
InsertAfterBegin(u111ann, "<div id='u111Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u111', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u111').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u111based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u111base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u111based = document.getElementById('u111based');
            
InsertBeforeEnd(u111based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member wants to login to the application,<BR><BR></div>");

u111.style.cursor = 'pointer';
if (bIE) u111.attachEvent("onclick", u111Click);
else u111.addEventListener("click", u111Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u111LinksClick'></DIV>")
var u111LinksClick = document.getElementById('u111LinksClick');
function u111Click(e) 
{

	ToggleLinks(e, 'u111LinksClick');
}

InsertBeforeEnd(u111LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u111Clicku01d31fb5df994f8a8596e0c2c2a55755(event)'>1) When user gives valid credentials  & Member</div>");
function u111Clicku01d31fb5df994f8a8596e0c2c2a55755(e)
{

	self.location.href="After-login-page[My-WBA].html" + GetQuerystring();

	ToggleLinks(e, 'u111LinksClick');
}

InsertBeforeEnd(u111LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u111Clicku4db4cb03247b431c9ddb9d6e51c40e69(event)'>2) When user gives valid credentials & Advertiser</div>");
function u111Clicku4db4cb03247b431c9ddb9d6e51c40e69(e)
{

	self.location.href="#" + GetQuerystring();

	ToggleLinks(e, 'u111LinksClick');
}

InsertBeforeEnd(u111LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u111Clicku489eeb3387cb4bd196116eeea16c66ba(event)'>3) When user gives invalid credentials</div>");
function u111Clicku489eeb3387cb4bd196116eeea16c66ba(e)
{

	self.location.href="Login-page.html" + GetQuerystring();

	ToggleLinks(e, 'u111LinksClick');
}

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u176 = document.getElementById('u176');

var u47 = document.getElementById('u47');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u205 = document.getElementById('u205');

x = 0;
y = 0;
InsertAfterBegin(u205ann, "<div id='u205Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u205', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u205').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u205based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u205base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u205based = document.getElementById('u205based');
            
InsertBeforeEnd(u205based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> When member wants to search the blogs on category based...<BR><BR></div>");

u205.style.cursor = 'pointer';
if (bIE) u205.attachEvent("onclick", Clicku205);
else u205.addEventListener("click", Clicku205, true);
function Clicku205(e)
{

if (true) {

	self.location.href="User-click-any-blog-category-page.html" + GetQuerystring();

}

}
gv_vAlignTable['u205'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u178 = document.getElementById('u178');

x = 0;
y = 0;
InsertAfterBegin(u178ann, "<div id='u178Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u178', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u178').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u178based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u178base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u178based = document.getElementById('u178based');
            
InsertBeforeEnd(u178based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> On click member can view the blog page<BR><BR></div>");

u178.style.cursor = 'pointer';
if (bIE) u178.attachEvent("onclick", Clicku178);
else u178.addEventListener("click", Clicku178, true);
function Clicku178(e)
{

if (true) {

	self.location.href="Blog-page.html" + GetQuerystring();

}

}

var u229 = document.getElementById('u229');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
if (window.OnLoad) OnLoad();
