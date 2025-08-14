//Kullan�c�n�n girdi�i metinleri g�r�nmesi gereken yerde g�steren metot
function MetinDoldur(girilenMetin, gorunecegiYer) {

    let metin = document.getElementById(girilenMetin).value;
    document.getElementById(gorunecegiYer).textContent = metin;
}

//Okul say�s� se�imine g�re g�r�n�rl���n�n ayarland��� metot
function OkulSayisiSec() {
    let okulSayisi = document.getElementById('okulSayisi').value;

    for (var i = 1; i <= 3; i++) {
        document.getElementById('okulSayisi' + i).hidden = true;
        document.getElementById('cvOkulLi' + i).hidden = true;
    }

    for (var i = 1; i <= okulSayisi; i++) {
        document.getElementById('okulSayisi' + i).hidden = false;
        document.getElementById('cvOkulLi' + i).hidden = false;
    }
}

//Yetenek say�s� se�imine g�re g�r�n�rl���n�n ayarland��� metot
function YetenekSayisiSec() {
    let yetenekSayisi = document.getElementById('yetenekSayisi').value;

    for (var i = 1; i <= 3; i++) {
        document.getElementById('yetenekSayisi' + i).hidden = true;
        document.getElementById('cvYetenekLi' + i).hidden = true;
    }

    for (var i = 1; i <= yetenekSayisi; i++) {
        document.getElementById('yetenekSayisi' + i).hidden = false;
        document.getElementById('cvYetenekLi' + i).hidden = false;
    }
}

//Arkaplan renklerini de�i�tiren metot
function RenkDegistir(renk, degisecegiYer) {
    document.getElementById(degisecegiYer).style.backgroundColor = document.getElementById(renk).value;
}

//�sim kutusu yaz� ve �izgi rengini de�i�tiren metot
function YaziRengiDegistir() {
    let renk = document.getElementById('isimKutusuYaziRenk').value;
    document.getElementById('isimKutusuIsim').style.color = renk;
    document.getElementById('cizgi').style.borderBlockColor = renk;
    document.getElementById('isimKutusuUnvan').style.color = renk;
}

//Font de�i�tiren i�in metot
function FontDegistir() {
    let secim = document.getElementById('yaziTipi').value;

    if (secim == 1) {
        document.getElementById('cv').style.fontFamily = 'Times New Roman';
    }
    else if (secim == 2) {
        document.getElementById('cv').style.fontFamily = 'Courier New';
    }
    else if (secim == 3) {
        document.getElementById('cv').style.fontFamily = 'Lucida Console';
    }
}

//Fotograf �ercevesinin �eklini de�i�tiren metot.
function CerceveDegistir() {
    let sekil = document.getElementById('fotoSekil').value;
    let radius = '';
    if (sekil == 1) radius = '0%';
    else if (sekil == 2) radius = '25%';
    else if (sekil == 3) radius = '50%';
    document.getElementById('fotograf').style.borderRadius = radius;
}

//�izgi rengi de�i�tiren metot
function CizgiRengiDegistir() {
    let renk = document.getElementById('cizgiRenk').value;
    document.getElementById('iletisimBaslik').style.borderBottomColor = renk;
    document.getElementById('egitimBaslik').style.borderBottomColor = renk;
    document.getElementById('yetenekBaslik').style.borderBottomColor = renk;
    document.getElementById('hakkimdaBaslik').style.borderBottomColor = renk;
    document.getElementById('deneyimBaslik').style.borderBottomColor = renk;
}

//�izgi �eklini de�i�tiren metot
function CizgiSekliDegistir() {
    let cizgiSekli = document.getElementById('cizgiSekil').value;
    document.getElementById('iletisimBaslik').style.borderBottomStyle = cizgiSekli;
    document.getElementById('egitimBaslik').style.borderBottomStyle = cizgiSekli;
    document.getElementById('yetenekBaslik').style.borderBottomStyle = cizgiSekli;
    document.getElementById('hakkimdaBaslik').style.borderBottomStyle = cizgiSekli;
    document.getElementById('deneyimBaslik').style.borderBottomStyle = cizgiSekli;
}