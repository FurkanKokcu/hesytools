console.log(`/*
 * Hesy Tools
 * Copyright (C) 2025 Furkan Kökçü
 *
 * Bu program özgür yazılımdır: Özgür Yazılım Vakfı tarafından yayımlanan
 * GNU Genel Kamu Lisansı'nın 3. sürümü (veya sizin tercihinize göre
 * daha sonraki herhangi bir sürümü) altında yeniden dağıtabilir
 * ve/veya değiştirebilirsiniz.
 */`)
function test(){
    const girdi = document.getElementById("hastalik").value;
    const islem = document.getElementById("islem").value;
    const ilac = document.getElementById("ilac").value;
    const lathas = {
    // --- Ağız ve Diş ---
    "şeker": "diyabet",
    "iltihap": "enfeksiyon / inflamasyon",
    "diş eti iltihabı": "gingivitis",
    "diş eti çekilmesi": "periodontal resesyon",
    "diş apsesi": "periapikal abse",
    "kemik erimesi (çenede)": "alveolar kemik rezorpsiyonu",
    "çene iltihabı": "osteomyelit",
    "çene kırığı": "mandibula / maksilla fraktürü",
    "çene eklemi rahatsızlığı": "temporomandibular eklem disfonksiyonu (TME / TMJ disorder)",
    "ağız yarası": "aftöz stomatit",
    "pamukçuk": "oral kandidiyazis",
    "soğuk yara (uçuk)": "herpes labialis",
    "siyah dil": "lingua villosa nigra",
    "ağız kuruluğu": "kserostomi",
    "ağız kokusu": "halitozis",
    "kanlı tükürük": "hemoptizi (eğer sistemik nedenli) veya travmatik kanama",
    "kemik çıkıntısı": "torkus mandibularis / torkus palatinus",

    // --- KBB ile ilişkili ---
    "sinüzit": "sinusitis",
    "kulak iltihabı": "otitis media / otitis externa",
    "bademcik iltihabı": "tonsillit",
    "boğaz iltihabı": "farenjit",
    "geniz eti büyümesi": "adenoid hipertrofisi",

    // --- Dahiliye / Enfeksiyon ---
    "şeker hastalığı": "diabetes mellitus",
    "yüksek tansiyon": "hipertansiyon",
    "kalp yetmezliği": "konjestif kalp yetmezliği",
    "kan sulandırıcı kullanımı": "antikoagülan tedavi (ör: warfarin, aspirin, clopidogrel)",
    "kansızlık": "anemi",
    "tiroid hastalığı": "hipotiroidi / hipertiroidi",
    "karaciğer hastalığı": "hepatopati / hepatit / siroz",
    "böbrek yetmezliği": "renal yetmezlik",
    "kalp krizi geçirmiş": "miyokard enfarktüsü öyküsü",
    "verem": "tüberküloz",
    "hepatit b": "HBV enfeksiyonu",
    "hepatit c": "HCV enfeksiyonu",
    "AIDS / HIV": "HIV pozitiflik",

    // --- Romatoloji / Ortopedi ---
    "romatizma": "romatoid artrit",
    "kemik erimesi": "osteoporoz",
    "eklem iltihabı": "artrit",
    "kas erimesi": "müsküler atrofi",

    // --- Dermatoloji ---
    "egzama": "dermatit",
    "sedef": "psoriasis",
    "vitiligo": "vitiligo",
    "mantar": "kandidiyazis / tinea",
    "uçuk": "herpes simplex",

    // --- Onkoloji / Patoloji ---
    "ağız içi yara (uzun süredir geçmeyen)": "oral skuamöz hücreli karsinom",
    "lenf bezi şişliği": "lenfadenopati",
    "ağızda kitle": "oral neoplazi olasılığı",
    "çene tümörü": "ameloblastoma / odontojenik tümör",
    "kist": "radiküler kist / dentijeröz kist / keratokistik odontojenik tümör",

    // --- Psikiyatri / Nörolojik ---
    "diş sıkma": "bruksizm",
    "bayılma hikayesi": "senkop öyküsü",
    "sara": "epilepsi",
    "anksiyete": "anksiyete bozukluğu",

    "sarılık": "hepatit"
    };
    const lagir = lathas[girdi]||girdi
    const check = document.getElementById("check1").checked;

    if (check){
        document.getElementById("demo").innerHTML = `Hastada alınan sözlü anamnezde ${lagir} geçmişi olduğu ilaç kullanmadığı öğrenilmiştir. Hastaya ${islem} uygulanacaktır. Tarafınızca değerlendirilmesi rica olunur.`  ;
    } else if (ilac === ""){
        document.getElementById("demo").innerHTML = `Hastada alınan sözlü anamnezde ${lagir} geçmişi olduğu ilaç kullandığı kullandığı ilacın ismini bilmediği öğrenilmiştir. Hastaya ${islem} uygulanacaktır. Tarafınızca değerlendirilmesi rica olunur.`  ;   
    }
    else{
        document.getElementById("demo").innerHTML = `Hastada alınan sözlü anamnezde ${lagir} geçmişi olduğu ilaç kullandığı kullandığı ilacın isminin ${ilac} öğrenilmiştir. Hastaya ${islem} uygulanacaktır. Tarafınızca değerlendirilmesi rica olunur.`  ;
    }
    }
    

function perio(){
    let drc
    let evre
    const dis = document.getElementById("diskaybi").value;
    const atasman = document.getElementById("atasmankaybi").value;
    const sig = document.getElementById("sigara").value || 0;
    if (dis<1 && atasman<3){
        evre = 1
    }else if(dis<1 && atasman>2){
        evre = 2
    }else if(dis<=4){
        evre = 3
    }else{
        evre = 4
    }

    if(sig<10){
        drc="A"
    }else if(sig<20){
        drc="B"
    }else{
        drc="C"
    }
    document.getElementById("perio").innerHTML = `Hastada evre ${evre} derece ${drc} periodontitis mevcut.`
}

function ging(){
    const kana = Number(document.getElementById("kanama").value);
    const yuzd = Number(document.getElementById("yuz").value);
    let gingvar
    let gingind
    if (yuzd === 0) {
        document.getElementById("ging").innerHTML = "Yüz sayısı sıfır olamaz.";
        return;
    }
    gingind=(kana/yuzd)*100
    if(gingind>10){
        gingvar = "Gingivitis mevcut!"
    }else{
        gingvar = "Sağlıklı!"
    }
    document.getElementById("ging").innerHTML = `Kanama yüzdesi %${gingind}  ${gingvar}`
}

$(document).ready(function() {

    // --- HTML OLUŞTURUCU ---
    const kapsayici = document.getElementById("herbstIcerikAlani");
    
    // Kontrol ediyoruz: Sayfada kutu var mı VE veri dosyası yüklenmiş mi?
    if (kapsayici && typeof herbstVerileri !== 'undefined') {
        
        let htmlDeposu = "";

        // herbstVerileri değişkeni artık herbst.js dosyasından geliyor
        herbstVerileri.forEach((grup) => {
            
            // Başlık Stili
            htmlDeposu += `<h3 class="mt-4 mb-3 text-primary border-bottom pb-2">${grup.baslik}</h3>`;
            htmlDeposu += `<div class="accordion" id="accordion-${grup.kisaKod}">`;

            grup.testler.forEach((test, index) => {
                let uniqueId = `${grup.kisaKod}-${index}`;
                
                htmlDeposu += `
                <div class="card mb-2">
                    <div class="card-header p-0" id="heading-${uniqueId}">
                        <h5 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed p-3 font-weight-bold text-dark" type="button" data-toggle="collapse" data-target="#collapse-${uniqueId}" aria-expanded="false" aria-controls="collapse-${uniqueId}" style="text-decoration:none;">
                                ${test.soru}
                            </button>
                        </h5>
                    </div>

                    <div id="collapse-${uniqueId}" class="collapse" aria-labelledby="heading-${uniqueId}" data-parent="#accordion-${grup.kisaKod}">
                        <div class="card-body">
                            ${test.icerik}
                        </div>
                    </div>
                </div>`;
            });

            htmlDeposu += `</div>`;
        });

        kapsayici.innerHTML = htmlDeposu;
    } else {
        // Eğer herbst.js yüklenemediyse console'a hata basar (debug için)
        if(kapsayici) console.error("Hata: herbstVerileri bulunamadı. herbst.js dosyasını bağladığından emin ol.");
    }

    // --- DİĞER FONKSİYONLARIN (Gingivitis vb.) BURADA DEVAM EDEBİLİR ---

});

// --- REÇETE OLUŞTURUCU ---
    const receteKapsayici = document.getElementById("receteIcerikAlani");

    if (receteKapsayici && typeof receteVerileri !== 'undefined') {
        let receteHTML = `<h4 class="mb-4 text-center mt-3 text-primary">Sık Kullanılan Reçeteler</h4>`;
        
        // Accordion Başlangıcı
        receteHTML += `<div class="accordion" id="accordionRecete">`;

        receteVerileri.forEach((item, index) => {
            let collapseId = `recete-${index}`;
            
            receteHTML += `
            <div class="card mb-3">
                <div class="card-header p-0" id="heading-${collapseId}">
                    <h5 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed p-3 font-weight-bold" type="button" data-toggle="collapse" data-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}" style="text-decoration:none;">
                            ${item.tani}
                        </button>
                    </h5>
                </div>

                <div id="${collapseId}" class="collapse" aria-labelledby="heading-${collapseId}" data-parent="#accordionRecete">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            ${item.ilaclar.map(ilac => `
                                <li class="list-group-item d-flex justify-content-between align-items-center" style="background-color: transparent;">
                                    <div>
                                        <strong>${ilac.ad}</strong>
                                        <div class="small text-muted">Doz: ${ilac.doz}</div>
                                    </div>
                                    <span class="badge badge-primary badge-pill">${ilac.kullanim}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>`;
        });

        receteHTML += `</div>`; // Accordion Bitiş
        receteKapsayici.innerHTML = receteHTML;
    }


//hema
$(document).ready(function() {
    $.each(hematolojiVerisi, function(index, satir) {
        var yeniSatir = `
            <tr>
              <td>${satir.hastalik}</td>
              <td>${satir.islem}</td>
              <td>${satir.risk}</td>
              <td>${satir.protokol}</td>
            </tr>
        `;
        $("#hemaTabloGovdesi").append(yeniSatir);
    });

  $("#hemaarama").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#hemaTabloGovdesi tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$('.dropdown-menu .dropdown-item').on('click', function(){
          $(".navbar-collapse").collapse('hide');
});

$('.dropdown-menu .dropdown-item, .nav-item .nav-link').on('click', function(){
        if(!$(this).hasClass('dropdown-toggle')){
            $(".navbar-collapse").collapse('hide');
        }
    });

    // 2. SORUN: GERİ DÖNEMEME (BUG FIX)
    // Bir tab'a tıklandığında (shown.bs.tab olayı), temizlik yapıyoruz
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        
        // Önce herkesin üzerindeki "active" etiketini söküp alıyoruz
        $('.nav-link').removeClass('active');
        $('.dropdown-item').removeClass('active');
        
        // Sadece şu an tıklanan arkadaşa "active" etiketi veriyoruz
        $(e.target).addClass('active');

        // EĞER tıklanan şey dropdown içindeyse (Periodontitis gibi),
        // onun babası olan "Periofind" butonunu da parlatıyoruz ki belli olsun
        if ($(e.target).hasClass('dropdown-item')) {
            $('#navbardrop').addClass('active'); // Navbardaki ana başlığın ID'si
        }
    });

//Hemacheckmath
function hemamathfunc(){
    const ha1c = Number(document.getElementById("ha1c").value);
    const buyuk = Number(document.getElementById("sysInput").value);
    const kucuk = Number(document.getElementById("diaInput").value);
    const inr = Number(document.getElementById("inr").value);
    const hemoglobin = Number(document.getElementById("hemoglobin").value);
    let inrdeger
    let hemoglobindeger
    let ha1cdeger
    let tansiyondeger

    if (inr<=3){
        inrdeger = "Kanama açısından düşük risk, cerrahi çekimde herhangi bir sakınca yok"
    }else if (inr>3){
        inrdeger = "Konsültasyon gerekli!"
    }

    if (hemoglobin>18){
        hemoglobindeger = "Konsültasyon gerekli!"
    }else if(hemoglobin>10){
        hemoglobindeger = "Her türlü dental tedavi yapılabilir."
    }else if(hemoglobin>7){
        hemoglobindeger = "Dikkatli olunmalı. Yara iyileşmesi geç olabilir. Genel anestezi/Sedasyon riski artar."
    }else{
        hemoglobindeger = "Konsültasyon gerekli!"
    }

    if (ha1c<7){
        ha1cdeger = "Her türlü dental tedavi yapılabilir."
    }else if (ha1c<9){
        ha1cdeger = "Enfeksiyon riski artar, yara iyileşmesi bozulur. Profilaktik (önleyici) antibiyotik gerekebilir."
    }else{
        ha1cdeger = "Konsültasyon gerekli!"
    }

    if (buyuk<90 || kucuk<60){
        tansiyondeger = "Hipotansiyon. Senkop riski!"
    }else if(buyuk<180 || kucuk<110){
        tansiyondeger="Normal değerlerde"
    }else{
        tansiyondeger = "Hipertansiyon, Kesinlikle işlem yapılmaz!"
    }
    document.getElementById("hemaan").innerHTML = `
            <strong>INR:</strong> ${inrdeger} <br>
            <strong>Hemoglobin:</strong> ${hemoglobindeger} <br>
            <strong>HbA1c:</strong> ${ha1cdeger} <br>
            <strong>Tansiyon:</strong> ${tansiyondeger}
        `;
}

//pedoguide
let text = "";
const yasliste = [4, 5, 6, 7, 8, 9, 10, 11, 12];

function pedoguidef(){
    for (let yas of yasliste){
        text += `<button class="btn btn-primary" onclick="pedo(${yas})">${yas}</button>`;
    }
    document.getElementById("pedoguideicerik").innerHTML = text;
}
pedoguidef();

function pedo(yas){
    const liste = disRehberi[yas];

    let html = `<h3>${yas} Yaş Diş Rehberi</h3><ul>`;

    for (let item of liste){
        html += `<li>${item}</li>`;
    }
    html += `</ul>`;

    document.getElementById("pedoicerik").innerHTML = html;
}

function notesfunc(){
    const title = document.getElementById("baslik").value;
    const comment = document.getElementById("icerik").value;
    const notesrem = `
            <div class="card p-3 mb-2">
                <h3>${title}</h3>
                <p>${comment}</p>
                <button onclick="deleteme(this)" class="btn btn-danger btn-sm">Sil</button>
            </div>
        `;
    if(title!=""){
        document.getElementById("notesdiv").innerHTML += notesrem;
        localStorage.setItem("notlarHTML", document.getElementById("notesdiv").innerHTML);
        document.getElementById("baslik").value = "" ;
        document.getElementById("icerik").value = "";
    }else if(comment==="hesy dental suite"){
        alert("Sanırım eskiden beri kullanıyorsun")
    }
}
function deleteme(thisnote){
    thisnote.parentElement.remove();
    localStorage.setItem("notlarHTML", document.getElementById("notesdiv").innerHTML);
}

window.onload = function() {
    const kayitliHTML = localStorage.getItem("notlarHTML");
    
    if (kayitliHTML) {
        document.getElementById("notesdiv").innerHTML = kayitliHTML;
    }
}
