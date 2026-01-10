console.log(`/*
 * Hesy Tools
 * Copyright (C) 2025 Furkan Kökçü
 *
 * Bu program özgür yazılımdır: Özgür Yazılım Vakfı tarafından yayımlanan
 * GNU Genel Kamu Lisansı'nın 3. sürümü (veya sizin tercihinize göre
 * daha sonraki herhangi bir sürümü) altında yeniden dağıtabilir
 * ve/veya değiştirebilirsiniz.
 */`)
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

    function deleteme(thisnote){
        thisnote.parentElement.remove();
        localStorage.setItem("notlarHTML", document.getElementById("notesdiv").innerHTML);
    }
    

 document.addEventListener('alpine:init', () => {
    Alpine.data('hesyapp', () => ({
        diskaybi: '',
        atasmankaybi: '',
        sigara: '',
        periosonuc: '',
        kanamaging:'',
        yuzging:'',
        gingsonuc:'',
        hastalik:'',
        islem:'',
        ilac:'',
        konssonuc:'',
        check1:'',
        lathassozluk: {},
        herbstverileri: [],
        receteverileri:[],
        ha1c:'',
        sysInput:'',
        diaInput:'',
        inr:'',
        hemoglobin:'',
        hemasonuc:'',
        pedoguideicerik:'',
        pedoguideverileri: [],
        secilenPedo: null,
        baslik:'',
        icerik:'',
        notesdiv:'',


        async init(){
            try{
                const [lathasanswer, herbstanswer, receteanswer, pedoanswer]= await Promise.all([
                    fetch('lathas.json'),
                    fetch('herbst.json'),
                    fetch('receteler.json'),
                    fetch('pedoguide.json')
                ])
                this.lathassozluk = await lathasanswer.json();
                this.herbstverileri = await herbstanswer.json();
                this.receteverileri = await receteanswer.json();
                this.pedoguideverileri = await pedoanswer.json();
                this.initNotes();
            }
            catch(hata){
                console.error("Dosya okunamadı:", hata)
            }
        },

        initNotes() {
            this.notesdiv = localStorage.getItem("notlarHTML") || "";
        },

        perio(){
            let evre;
            let drc;
            
            const dis = Number(this.diskaybi) || 0;
            const atasman = Number(this.atasmankaybi) || 0;
            const sig = Number(this.sigara) || 0;

            if (dis < 1 && atasman < 3) {
                evre = 1;
            } else if (dis < 1 && atasman > 2) {
                evre = 2;
            } else if (dis <= 4) {
                evre = 3;
            } else {
                evre = 4;
            }

            if (sig < 10) {
                drc = "A";
            } else if (sig < 20) {
                drc = "B";
            } else {
                drc = "C";
            }
            this.periosonuc = `Hastada evre ${evre} derece ${drc} periodontitis mevcut.`;
        },

        ging(){
            let gingvar
            let gingind
            const kana = Number(this.kanamaging);
            const yuzd = Number(this.yuzging);
            if (yuzd === 0){
                this.gingsonuc = "Yüz sayısı sıfır olamaz.";
                return;
            }
            gingind=(kana/yuzd)*100
            if(gingind>10){
                gingvar = "Gingivitis mevcut!"
            }else{
                gingvar = "Sağlıklı!"
            }
            this.gingsonuc = `Kanama yüzdesi %${gingind}  ${gingvar}`
        },

        kons(){
            const girdi = this.hastalik;
            const islem = this.islem;
            const ilac = this.ilac;
            const lathas = this.lathassozluk
            const lagir = lathas[girdi]||girdi
            const check = this.check1;

            if (check){
                this.konssonuc = `Hastada alınan sözlü anamnezde ${lagir} geçmişi olduğu ilaç kullanmadığı öğrenilmiştir. Hastaya ${islem} uygulanacaktır. Tarafınızca değerlendirilmesi rica olunur.`  ;
            } else if (ilac === ""){
                this.konssonuc = `Hastada alınan sözlü anamnezde ${lagir} geçmişi olduğu ilaç kullandığı kullandığı ilacın ismini bilmediği öğrenilmiştir. Hastaya ${islem} uygulanacaktır. Tarafınızca değerlendirilmesi rica olunur.`  ;   
            }
            else{
                this.konssonuc = `Hastada alınan sözlü anamnezde ${lagir} geçmişi olduğu ilaç kullandığı kullandığı ilacın isminin ${ilac} öğrenilmiştir. Hastaya ${islem} uygulanacaktır. Tarafınızca değerlendirilmesi rica olunur.`  ;
            }
        },

        hemamathfunc(){
            const ha1c = this.ha1c;
            const buyuk = this.sysInput;
            const kucuk = this.diaInput;
            const inr = this.inr;
            const hemoglobin = this.hemoglobin;
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
            this.hemasonuc = `
                    <strong>INR:</strong> ${inrdeger} <br>
                    <strong>Hemoglobin:</strong> ${hemoglobindeger} <br>
                    <strong>HbA1c:</strong> ${ha1cdeger} <br>
                    <strong>Tansiyon:</strong> ${tansiyondeger}
                `;
        },

        notesfunc() {
            if (this.icerik === "hesy dental suite") {
                alert("Sanırım eskiden beri kullanıyorsun");
                this.icerik = ""; 
                return;
            }

            const yeniNot = `
            <div class="card p-3 mb-2">
                <h3>${this.baslik}</h3>
                <p>${this.icerik}</p>
                <button onclick="deleteme(this)" class="btn btn-danger btn-sm">Sil</button>
            </div>
        `;

            this.notesdiv += yeniNot;

            // 5. LocalStorage'a "HTML" olarak kaydet
            localStorage.setItem("notlarHTML", this.notesdiv);

            // 6. Kutuları temizle
            this.baslik = "";
            this.icerik = "";
        }

    }))
 })
