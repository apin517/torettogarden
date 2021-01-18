var H = /** @class */ (function () {
    function H(ukuran, isi) {
        this.ukuran = ukuran;
        this.isi = isi;
    }
    H.prototype.Kunci = function () {
        return "\n        <h" + this.ukuran + ">" + this.isi + "</h" + this.ukuran + ">\n        ";
    };
    return H;
}());
var A = /** @class */ (function () {
    function A(href, teks) {
        this.href = href;
        this.teks = teks;
    }
    A.prototype.Kunci = function () {
        return "\n        <a href=\"" + this.href + "\">" + this.teks + "</a>\n        ";
    };
    return A;
}());
var HA = /** @class */ (function () {
    function HA(size, classH, href, teks) {
        this.size = size;
        this.classH = classH;
        this.AlinkH = new A(href, teks);
    }
    HA.prototype.Kunci = function () {
        return "\n        <h" + this.size + " class=\"" + this.classH + "\">" + this.AlinkH.Kunci() + "</h" + this.size + ">\n        ";
    };
    return HA;
}());
var Li = /** @class */ (function () {
    function Li(link, t) {
        this.Alink = new A(link, t);
    }
    Li.prototype.Kunci = function () {
        return "\n        <li>" + this.Alink.Kunci() + "</li>\n        ";
    };
    return Li;
}());
var Ul = /** @class */ (function () {
    function Ul(linkhome, tekshome, linkfitur, teksfitur, linkpaket, tekspaket, linkgaleri, teksgaleri) {
        this.Home = new Li(linkhome, tekshome);
        this.Fitur = new Li(linkfitur, teksfitur);
        this.Paket = new Li(linkpaket, tekspaket);
        this.Galeri = new Li(linkgaleri, teksgaleri);
    }
    Ul.prototype.Kunci = function () {
        return "\n        <ul>\n            " + this.Home.Kunci() + "\n            " + this.Fitur.Kunci() + "\n            " + this.Paket.Kunci() + "\n            " + this.Galeri.Kunci() + "\n        </ul>\n        ";
    };
    return Ul;
}());
var Nav = /** @class */ (function () {
    function Nav(classnavbar, linghome, teksshome, lingfitur, tekssfitur, lingpaket, teksspaket, linggaleri, tekssgaleri) {
        this.classnavbar = classnavbar;
        this.Isinavbar = new Ul(linghome, teksshome, lingfitur, tekssfitur, lingpaket, teksspaket, linggaleri, tekssgaleri);
    }
    Nav.prototype.Kunci = function () {
        return "\n        <nav class=\"" + this.classnavbar + "\">\n            " + this.Isinavbar.Kunci() + "\n        </nav>\n        ";
    };
    return Nav;
}());
var DivHeader = /** @class */ (function () {
    function DivHeader(classdivheader, size, classH, href, teks, classnavbar, linghome, teksshome, lingfitur, tekssfitur, lingpaket, teksspaket, linggaleri, tekssgaleri) {
        this.classdivheader = classdivheader;
        this.Logo = new HA(size, classH, href, teks);
        this.Navbar = new Nav(classnavbar, linghome, teksshome, lingfitur, tekssfitur, lingpaket, teksspaket, linggaleri, tekssgaleri);
    }
    DivHeader.prototype.Kunci = function () {
        return "\n            <div class=\"" + this.classdivheader + "\">\n                " + this.Logo.Kunci() + "\n                " + this.Navbar.Kunci() + "\n            </div>\n        ";
    };
    return DivHeader;
}());
var HeaderTop = /** @class */ (function () {
    function HeaderTop(id, classheader) {
        this.id = id;
        this.classheader = classheader;
        this.IsiDiv = new DivHeader("container d-flex align-items-center", "1", "logo mr-auto", "index.html", "Toretto Garden", "nav-menu d-none d-lg-block", "tampilan.html", "Home", "Fitur.html", "Fitur", "Paket.html", "Paket", "galery.html", "Galery");
    }
    HeaderTop.prototype.Kunci = function () {
        return "\n        <header id=\"" + this.id + "\" class=\"" + this.classheader + "\">\n            " + this.IsiDiv.Kunci() + "\n        </header>\n        ";
    };
    return HeaderTop;
}());
var I = /** @class */ (function () {
    function I(classI) {
        this.classI = classI;
    }
    I.prototype.Kunci = function () {
        return "\n        <i class=\"" + this.classI + "\"></i>\n        ";
    };
    return I;
}());
var AI = /** @class */ (function () {
    function AI(href, ClassA, classI) {
        this.href = href;
        this.ClassA = ClassA;
        this.ClassI = new I(classI);
    }
    AI.prototype.Kunci = function () {
        return "\n        <a href=\"" + this.href + "\" class=\"" + this.ClassA + "\">" + this.ClassI.Kunci() + "</a>\n        ";
    };
    return AI;
}());
var DivAI = /** @class */ (function () {
    function DivAI(idDiv, classDiv, class1, class2, nomerHP, class3) {
        this.idDiv = idDiv;
        this.classDiv = classDiv;
        this.class1 = class1;
        this.class2 = class2;
        this.I1 = new I("icofont-envelope");
        this.A1 = new A("#", "Torettogarden@gmail.com");
        this.I2 = new I("icofont-phone");
        this.nomerHP = nomerHP;
        this.class3 = class3;
        this.AI1 = new AI("#", "twitter", "icofont-twitter");
        this.AI2 = new AI("#", "facebook", "icofont-facebook");
        this.AI3 = new AI("#", "instagram", "icofont-instagram");
        this.AI4 = new AI("#", "skype", "icofont-skype");
        this.AI5 = new AI("#", "linkedin", "icofont-linkedin");
    }
    DivAI.prototype.Kunci = function () {
        return "\n        <div id=\"" + this.idDiv + "\" class=\"" + this.classDiv + "\">\n            <div class=\"" + this.class1 + "\">\n                <div class=\"" + this.class2 + "\">\n                    " + this.I1.Kunci() + "\n                    " + this.A1.Kunci() + "\n                    " + this.I2.Kunci() + "\n                    " + this.nomerHP + "\n                </div>\n                <div class=\"" + this.class3 + "\">\n                    " + this.AI1.Kunci() + "\n                    " + this.AI2.Kunci() + "\n                    " + this.AI3.Kunci() + "\n                    " + this.AI4.Kunci() + "\n                    " + this.AI5.Kunci() + "\n                </div>\n            </div>\n        </div>\n        ";
    };
    return DivAI;
}());
var SelectHome = /** @class */ (function () {
    function SelectHome(idSH, classSH, classDivSH, dataoasSH, dataoasdelaySH) {
        this.idSH = idSH;
        this.classSH = classSH;
        this.classDivSH = classDivSH;
        this.dataoasSH = dataoasSH;
        this.dataoasdelaySH = dataoasdelaySH;
        this.H1 = new H("1", "Welcome Toretto Garden");
        this.H2 = new H("2", "Terima jasa bumi bangunan");
    }
    SelectHome.prototype.Kunci = function () {
        return "\n        <section id=\"" + this.idSH + "\" class=\"" + this.classSH + "\">\n            <div class=\"" + this.classDivSH + "\" data-aos=\"" + this.dataoasSH + "\" data-aos-delay=\"" + this.dataoasdelaySH + "\">\n                " + this.H1.Kunci() + "\n                " + this.H2.Kunci() + "\n            </div>\n        </section>\n        ";
    };
    return SelectHome;
}());
var LiIA = /** @class */ (function () {
    function LiIA(clss, hrf, tks) {
        this.LiI = new I(clss);
        this.LiA = new A(hrf, tks);
    }
    LiIA.prototype.Kunci = function () {
        return "\n        <li>\n            " + this.LiI.Kunci() + "\n            " + this.LiA.Kunci() + "\n        </li>\n        ";
    };
    return LiIA;
}());
var P = /** @class */ (function () {
    function P(textisi) {
        this.textisi = textisi;
    }
    P.prototype.Kunci = function () {
        return "\n        <p>" + this.textisi + "</p>\n        ";
    };
    return P;
}());
var Footer = /** @class */ (function () {
    function Footer(idfooter, classdiv1, classdiv2, classdiv3, classdiv4, classdiv5, classdiv6, classdiv7, classdiv8, classdiv9, classdiv10, classdiv11, text1, text2, text3, classdiv12, text4) {
        this.idfooter = idfooter;
        this.classdiv1 = classdiv1;
        this.classdiv2 = classdiv2;
        this.classdiv3 = classdiv3;
        this.classdiv4 = classdiv4;
        this.classdiv5 = classdiv5;
        this.H1footer = new H("3", "Toretto GARDEN");
        this.PFooter1 = new P("Jl. IKan Bakar RT/RW 10/10<br>Rasa Semongko, Giri<br>Banyuwangi<br><br><strong>Phone:</strong> +62 8520 4583 724<br><strong>Email:</strong> Torettogarden@gmail.com<br>");
        this.classdiv6 = classdiv6;
        this.AI1Footer = new AI("#", "twitter", "icofont-twitter");
        this.AI2Footer = new AI("#", "facebook", "icofont-facebook");
        this.AI3Footer = new AI("#", "instagram", "icofont-instagram");
        this.AI4Footer = new AI("#", "skype", "icofont-skype");
        this.AI5Footer = new AI("#", "linkedin", "icofont-linkedin");
        this.classdiv7 = classdiv7;
        this.H2footer = new H("4", "Useful Links");
        this.lia1 = new LiIA("bx bx-chevron-right", "home.html", "Home");
        this.lia2 = new LiIA("bx bx-chevron-right", "About.html", "Fitur");
        this.lia3 = new LiIA("bx bx-chevron-right", "paket.html", "Paket");
        this.lia4 = new LiIA("bx bx-chevron-right", "galery.html", "Galery");
        this.classdiv8 = classdiv8;
        this.H3footer = new H("4", "Facilities");
        this.lia5 = new LiIA("bx bx-chevron-right", "#", "Garansi");
        this.lia6 = new LiIA("bx bx-chevron-right", "#", "Free 1 Spring Beed");
        this.lia7 = new LiIA("bx bx-chevron-right", "#", "Discount");
        this.classdiv9 = classdiv9;
        this.H4footer = new H("4", "감사합니다 (Terimakasih)");
        this.PFooter2 = new P("Terimakasih telah menuju aplikasi kami, semoga pelayanan kami memuat anda puas");
        this.classdiv10 = classdiv10;
        this.classdiv11 = classdiv11;
        this.text1 = text1;
        this.text2 = text2;
        this.text3 = text3;
        this.classdiv12 = classdiv12;
        this.text4 = text4;
        this.Acopy = new A("home.html", "Toretto Garden");
    }
    Footer.prototype.Kunci = function () {
        return "\n        <footer id=\"" + this.idfooter + "\">\n            <div class=\"" + this.classdiv1 + "\">\n                <div class=\"" + this.classdiv2 + "\">\n                    <div class=\"" + this.classdiv3 + "\">\n                        <div class=\"" + this.classdiv4 + "\">\n                            <div class=\"" + this.classdiv5 + "\">\n                                " + this.H1footer.Kunci() + "\n                                " + this.PFooter1.Kunci() + "\n                                <div class=\"" + this.classdiv6 + "\">\n                                    " + this.AI1Footer.Kunci() + "\n                                    " + this.AI2Footer.Kunci() + "\n                                    " + this.AI3Footer.Kunci() + "\n                                    " + this.AI4Footer.Kunci() + "\n                                    " + this.AI5Footer.Kunci() + "\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"" + this.classdiv7 + "\">\n                            " + this.H2footer.Kunci() + "\n                            <ul>\n                                " + this.lia1.Kunci() + "\n                                " + this.lia2.Kunci() + "\n                                " + this.lia3.Kunci() + "\n                                " + this.lia4.Kunci() + "\n                            </ul>\n                        </div>\n                        <div class=\"" + this.classdiv8 + "\">\n                            " + this.H3footer.Kunci() + "\n                            <ul>    \n                                " + this.lia5.Kunci() + "\n                                " + this.lia6.Kunci() + "\n                                " + this.lia7.Kunci() + "\n                            </ul>\n                        </div>\n                        <div class=\"" + this.classdiv9 + "\">\n                            " + this.H4footer.Kunci() + "\n                            " + this.PFooter2.Kunci() + "\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"" + this.classdiv10 + "\">\n                <div class=\"" + this.classdiv11 + "\">\n                    &copy; " + this.text1 + " <strong><span>" + this.text2 + "</span></strong>" + this.text3 + "\n                </div>\n                <div class=\"" + this.classdiv12 + "\">\n                    " + this.text4 + this.Acopy.Kunci() + "\n                </div>\n            </div>\n        </footer>\n        ";
    };
    return Footer;
}());
var Span = /** @class */ (function () {
    function Span(text) {
        this.text = text;
    }
    Span.prototype.Kunci = function () {
        return "\n        <span>" + this.text + "</span>\n        ";
    };
    return Span;
}());
var SectionTitle = /** @class */ (function () {
    function SectionTitle(STclass, STtext, STukuran, STisi, STtextisi) {
        this.STclass = STclass;
        this.STspan = new Span(STtext);
        this.STh2 = new H(STukuran, STisi);
        this.STparagraf = new P(STtextisi);
    }
    SectionTitle.prototype.Kunci = function () {
        return "\n        <div class=\"" + this.STclass + "\">\n            <br>\n            " + this.STspan.Kunci() + "\n            " + this.STh2.Kunci() + "\n            " + this.STparagraf.Kunci() + "\n        </div>\n        ";
    };
    return SectionTitle;
}());
var Img = /** @class */ (function () {
    function Img(classImg, srcImg, altImg) {
        this.classImg = classImg;
        this.srcImg = srcImg;
        this.altImg = altImg;
    }
    Img.prototype.Kunci = function () {
        return "\n        <img class=\"" + this.classImg + "\" src=\"" + this.srcImg + "\" alt=\"" + this.altImg + "\">\n        ";
    };
    return Img;
}());
var DataMember = /** @class */ (function () {
    function DataMember(DMclass1, DMdataaos, DMclass2, DMclass, DMsrc, DMalt, DMukuran, DMisi) {
        this.DMclass1 = DMclass1;
        this.DMdataaos = DMdataaos;
        this.DMclass2 = DMclass2;
        this.DMimg = new Img(DMclass, DMsrc, DMalt);
        this.DMh1 = new H(DMukuran, DMisi);
    }
    DataMember.prototype.Kunci = function () {
        return "\n        <div class=\"" + this.DMclass1 + "\" data-aos=\"" + this.DMdataaos + "\">\n            <div class=\"" + this.DMclass2 + "\">\n                " + this.DMimg.Kunci() + "\n                " + this.DMh1.Kunci() + "\n            </div>\n        </div>\n        ";
    };
    return DataMember;
}());
var LayoutPlan = /** @class */ (function () {
    function LayoutPlan(LPid, LPsecclass, LPdivclass1, LPdivclass2) {
        this.LPid = LPid;
        this.LPsecclass = LPsecclass;
        this.LPdivclass1 = LPdivclass1;
        this.LPsectiontitle = new SectionTitle("section-title", "Layout Plan", "2", "Layout Plan", "Sebuah tampilan sketsa bangunan perumahan Toretto Garden");
        this.LPdivclass2 = LPdivclass2;
        this.LPdatamember1 = new DataMember("col-lg-4 col-md-6 d-flex align-items-stretch", "zoom-in", "member", "gambar", "images.jpg", "", "4", "Sketsa Sultan");
        this.LPdatamember2 = new DataMember("col-lg-4 col-md-6 d-flex align-items-stretch", "zoom-in", "member", "gambar", "l3.jpg", "", "4", "Sketsa Umum");
        this.LPdatamember3 = new DataMember("col-lg-4 col-md-6 d-flex align-items-stretch", "zoom-in", "member", "gambar", "gambar.jpg", "", "4", "Sketsa Istimewa");
    }
    LayoutPlan.prototype.Kunci = function () {
        return "\n        <section id=\"" + this.LPid + "\" class=\"" + this.LPsecclass + "\">\n            <div class=\"" + this.LPdivclass1 + "\">\n                " + this.LPsectiontitle.Kunci() + "\n                <div class=\"" + this.LPdivclass2 + "\">\n                    " + this.LPdatamember1.Kunci() + "\n                    " + this.LPdatamember2.Kunci() + "\n                    " + this.LPdatamember3.Kunci() + "\n                </div>\n            </div>\n        </section>\n        ";
    };
    return LayoutPlan;
}());
var DaftarFasilitas = /** @class */ (function () {
    function DaftarFasilitas(DFclass1, DFdataaos, DFdelay, DFclass2, DFclass3, DFclassi, DFukuran, DFhref, DFteks, DFtextisi) {
        this.DFclass1 = DFclass1;
        this.DFdataaos = DFdataaos;
        this.DFdelay = DFdelay;
        this.DFclass2 = DFclass2;
        this.DFclass3 = DFclass3;
        this.DFi = new I(DFclassi);
        this.DFukuran = DFukuran;
        this.DFa = new A(DFhref, DFteks);
        this.DFp = new P(DFtextisi);
    }
    DaftarFasilitas.prototype.Kunci = function () {
        return "\n        <div class=\"" + this.DFclass1 + "\" data-aos=\"" + this.DFdataaos + "\" data-aos-delay=\"" + this.DFdelay + "\">\n            <div class=\"" + this.DFclass2 + "\">\n                <div class=\"" + this.DFclass3 + ">\n                    " + this.DFi.Kunci() + "\n                </div>\n                <h" + this.DFukuran + ">" + this.DFa.Kunci() + "</h" + this.DFukuran + ">\n                " + this.DFp.Kunci() + "\n            </div>\n        </div>\n        ";
    };
    return DaftarFasilitas;
}());
var Facilities = /** @class */ (function () {
    function Facilities(Fid, Fsecclass, Fdivclass1, Fdivclass2) {
        this.Fid = Fid;
        this.Fsecclass = Fsecclass;
        this.Fdivclass1 = Fdivclass1;
        this.Fsectitle = new SectionTitle("section-title", "Facilities", "2", "Facilities", "Memberikan Kenyamanan Tempat Tinggal Bagi Anda");
        this.Fdivclass2 = Fdivclass2;
        this.Fdaftar1 = new DaftarFasilitas("col-lg-4 col-md-6 d-flex align-items-stretch", "fade-up", "1", "icon-box", "icon", "bx bx-file", "4", "", "Garansi", "Garansi untuk perbaikan selama 1 tahun");
        this.Fdaftar2 = new DaftarFasilitas("col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0", "fade-up", "150", "icon-box", "icon", "bx bx-file", "4", "", "Free 1 Spring Beed", "jika anda pesan melalui website kami maka akan mendapat 1 spring Beed");
        this.Fdaftar3 = new DaftarFasilitas("col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0", "fade-up", "300", "icon-box", "icon", "bx bx-file", "4", "", "Discount", "Diskon ini tersedia pada Opening sebesar 25% dan pada periode tertentu sebesar 15%");
    }
    Facilities.prototype.Kunci = function () {
        return "\n        <section id=\"" + this.Fid + "\" class=\"" + this.Fsecclass + "\">\n            <div class=\"" + this.Fdivclass1 + "\">\n                " + this.Fsectitle.Kunci() + "\n                <div class=\"" + this.Fdivclass2 + "\">\n                    " + this.Fdaftar1.Kunci() + "\n                    " + this.Fdaftar2.Kunci() + "\n                    " + this.Fdaftar3.Kunci() + "\n                </div>\n            </div>\n        </section>\n        ";
    };
    return Facilities;
}());
var Package = /** @class */ (function () {
    function Package(Fid, Fsecclass, Fdivclass1, Fdivclass2) {
        this.Fid = Fid;
        this.Fsecclass = Fsecclass;
        this.Fdivclass1 = Fdivclass1;
        this.Fsectitle = new SectionTitle("section-title", "Paket", "2", "Paket", "Memberikan Kenyamanan Tempat Tinggal Bagi Anda");
        this.Fdivclass2 = Fdivclass2;
        this.Fdaftar1 = new DaftarFasilitas("col-lg-4 col-md-6 d-flex align-items-stretch", "fade-up", "1", "icon-box", "icon", "bx bx-file", "4", "", "Paket 1", "Bangunan dengan Luas 600 m x 400 m");
        this.Fdaftar2 = new DaftarFasilitas("col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0", "fade-up", "150", "icon-box", "icon", "bx bx-file", "4", "", "Paket 2", "Bangunan dengan Luas 400 m x 250 m");
        this.Fdaftar3 = new DaftarFasilitas("col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0", "fade-up", "300", "icon-box", "icon", "bx bx-file", "4", "", "Paket 3", "Bangunan dengan Luas 200 m x 100 m");
    }
    Package.prototype.Kunci = function () {
        return "\n        <section id=\"" + this.Fid + "\" class=\"" + this.Fsecclass + "\">\n            <div class=\"" + this.Fdivclass1 + "\">\n                " + this.Fsectitle.Kunci() + "\n                <div class=\"" + this.Fdivclass2 + "\">\n                    " + this.Fdaftar1.Kunci() + "\n                    " + this.Fdaftar2.Kunci() + "\n                    " + this.Fdaftar3.Kunci() + "\n                </div>\n            </div>\n        </section>\n        ";
    };
    return Package;
}());
var AIPor = /** @class */ (function () {
    function AIPor(href1, datagall, classA1, title1, classi1, href2, classA2, title2, classI2) {
        this.href1 = href1;
        this.datagall = datagall;
        this.classA1 = classA1;
        this.title1 = title1;
        this.classI1 = new I(classi1);
        this.href2 = href2;
        this.classA2 = classA2;
        this.title2 = title2;
        this.classI2 = new I(classI2);
    }
    AIPor.prototype.Kunci = function () {
        return "\n        <a href=\"" + this.href1 + "\" data-gall=\"" + this.datagall + "\" class=\"" + this.classA1 + "\" title=\"" + this.title1 + "\">\n            " + this.classI1.Kunci() + "\n        </a>\n        <a href=\"" + this.href2 + "\" class=\"" + this.classA2 + "\" title=\"" + this.title2 + "\">\n            " + this.classI2.Kunci() + "\n        </a>\n        ";
    };
    return AIPor;
}());
var Portofolio = /** @class */ (function () {
    function Portofolio(Pordiv1, classImg, srcImg, altImg, Pordiv2, size, isi, txtisi, href11, datagall1, classA11, title11, classI11, href21, classA21, title21, classI21) {
        this.Pordiv1 = Pordiv1;
        this.Porimgsrc = new Img(classImg, srcImg, altImg);
        this.Pordiv2 = Pordiv2;
        this.Porh = new H(size, isi);
        this.Porp = new P(txtisi);
        this.Porai1 = new AIPor(href11, datagall1, classA11, title11, classI11, href21, classA21, title21, classI21);
    }
    Portofolio.prototype.Kunci = function () {
        return "\n        <div class=\"" + this.Pordiv1 + "\">\n            " + this.Porimgsrc.Kunci() + "\n            <div class=\"" + this.Pordiv2 + "\">\n                " + this.Porh.Kunci() + "\n                " + this.Porp.Kunci() + "\n                " + this.Porai1.Kunci() + "\n            </div>\n        </div>\n        ";
    };
    return Portofolio;
}());
var Galeri = /** @class */ (function () {
    function Galeri(Gid, Gsecclass, Gdivclass1, Gdivclass2, Gdataaos, Gdataaosdelay) {
        this.Gid = Gid;
        this.Gsecclass = Gsecclass;
        this.Gdivclass1 = Gdivclass1;
        this.Gsectitle = new SectionTitle("section-title", "Galery", "2", "Galery", "Menampilkan Bangunan Perumahan Yang Telah Jadi dari Toretto Garden");
        this.Gdivclass2 = Gdivclass2;
        this.Gdataaos = Gdataaos;
        this.Gdataaosdelay = Gdataaosdelay;
        this.Gportofolio1 = new Portofolio("col-lg-4 col-md-6 portfolio-item filter-app", "img-fluid", "Screenshot_7-1024x569.jpg", "", "portfolio-info", "4", "App 1", "App", "assets/img/portfolio/portfolio-1.jpg", "portfolioGallery", "venobox preview-link", "App 1", "bx bx-plus", "portfolio-details.html", "details-link", "More Details", "bx bx-link");
        this.Gportofolio2 = new Portofolio("col-lg-4 col-md-6 portfolio-item filter-web", "img-fluid", "Screenshot_17-1024x574.jpg", "", "portfolio-info", "4", "Web 1", "Web", "assets/img/portfolio/portfolio-2.jpg", "portfolioGallery", "venobox preview-link", "Web 1", "bx bx-plus", "portfolio-details.html", "details-link", "More Details", "bx bx-link");
        this.Gportofolio3 = new Portofolio("col-lg-4 col-md-6 portfolio-item filter-app", "img-fluid", "perum.jpeg", "", "portfolio-info", "4", "App 2", "App", "assets/img/portfolio/portfolio-3.jpg", "portfolioGallery", "venobox preview-link", "App 2", "bx bx-plus", "portfolio-details.html", "details-link", "More Details", "bx bx-link");
        this.Gportofolio4 = new Portofolio("col-lg-4 col-md-6 portfolio-item filter-card", "img-fluid", "gardentoretto.jpg", "", "portfolio-info", "4", "Card 1", "Card", "assets/img/portfolio/portfolio-4.jpg", "portfolioGallery", "venobox preview-link", "Card 1", "bx bx-plus", "portfolio-details.html", "details-link", "More Details", "bx bx-link");
        this.Gportofolio5 = new Portofolio("col-lg-4 col-md-6 portfolio-item filter-web", "img-fluid", "torettogreden.jpg", "", "portfolio-info", "4", "Web 2", "Web", "assets/img/portfolio/portfolio-5.jpg", "portfolioGallery", "venobox preview-link", "Web 2", "bx bx-plus", "portfolio-details.html", "details-link", "More Details", "bx bx-link");
    }
    Galeri.prototype.Kunci = function () {
        return "\n        <section id=\"" + this.Gid + "\" class=\"" + this.Gsecclass + "\">\n            <div class=\"" + this.Gdivclass1 + "\">\n                " + this.Gsectitle.Kunci() + "\n                <div class=\"" + this.Gdivclass2 + "\" data-aos=\"" + this.Gdataaos + "\" data-aos-delay=\"" + this.Gdataaosdelay + "\">\n                    " + this.Gportofolio1.Kunci() + "\n                    " + this.Gportofolio2.Kunci() + "\n                    " + this.Gportofolio3.Kunci() + "\n                    " + this.Gportofolio4.Kunci() + "\n                    " + this.Gportofolio5.Kunci() + "\n                </div>\n            </div>\n        </section>\n        ";
    };
    return Galeri;
}());
function Home() {
    var Linkhead = new DivAI("topbar", "d-none d-lg-flex align-items-center fixed-top", "container d-flex", "contact-info mr-auto", "+62 8520 4583 724", "social-links");
    var Head = new HeaderTop("header", "fixed-top");
    var Section = new SelectHome("hero", "d-flex align-items-center", "container position-relative", "fade-up", "500");
    var Foot = new Footer("footer", "footer-top", "container", "row", "col-lg-4 col-md-6", "footer-info", "social-links mt-3", "col-lg-2 col-md-6 footer-links", "col-lg-2 col-md-6 footer-links", "col-lg-4 col-md-6 footer-newsletter", "container", "copyright", " Copyright ", "Toretto Garden", ". All Rights Reserved", "credits", "Designed by ");
    document.getElementById("divlinkhead").innerHTML = Linkhead.Kunci();
    document.getElementById("divhead").innerHTML = Head.Kunci();
    document.getElementById("sectinoCon").innerHTML = Section.Kunci();
    document.getElementById("divfooter").innerHTML = Foot.Kunci();
}
function Fitur() {
    var Linkhead = new DivAI("topbar", "d-none d-lg-flex align-items-center fixed-top warnabeckground", "container d-flex", "contact-info mr-auto", "+62 8520 4583 724", "social-links");
    var Head = new HeaderTop("header", "fixed-top warnabeckground");
    var Layouplan = new LayoutPlan("team", "team", "container", "row");
    var fasilitase = new Facilities("services", "services", "container", "row");
    var Foot = new Footer("footer", "footer-top", "container", "row", "col-lg-4 col-md-6", "footer-info", "social-links mt-3", "col-lg-2 col-md-6 footer-links", "col-lg-2 col-md-6 footer-links", "col-lg-4 col-md-6 footer-newsletter", "container", "copyright", " Copyright ", "Toretto Garden", ". All Rights Reserved", "credits", "Designed by ");
    document.getElementById("fiturhead").innerHTML = Linkhead.Kunci();
    document.getElementById("fiturHd").innerHTML = Head.Kunci();
    document.getElementById("fiturLP").innerHTML = Layouplan.Kunci();
    document.getElementById("fiturdaftar").innerHTML = fasilitase.Kunci();
    document.getElementById("fiturfoot").innerHTML = Foot.Kunci();
}
function Paket() {
    var Linkhead = new DivAI("topbar", "d-none d-lg-flex align-items-center fixed-top warnabeckground", "container d-flex", "contact-info mr-auto", "+62 8520 4583 724", "social-links");
    var Head = new HeaderTop("header", "fixed-top warnabeckground");
    var pakett = new Package("services", "services", "container", "row");
    var Foot = new Footer("footer", "footer-top", "container", "row", "col-lg-4 col-md-6", "footer-info", "social-links mt-3", "col-lg-2 col-md-6 footer-links", "col-lg-2 col-md-6 footer-links", "col-lg-4 col-md-6 footer-newsletter", "container", "copyright", " Copyright ", "Toretto Garden", ". All Rights Reserved", "credits", "Designed by ");
    document.getElementById("pakethead").innerHTML = Linkhead.Kunci();
    document.getElementById("paketHd").innerHTML = Head.Kunci();
    document.getElementById("pakett").innerHTML = pakett.Kunci();
    document.getElementById("paketfoot").innerHTML = Foot.Kunci();
}
function Galery() {
    var Linkhead = new DivAI("topbar", "d-none d-lg-flex align-items-center fixed-top warnabeckground", "container", "contact-info mr-auto", "+62 8520 4583 724", "social-links");
    var Head = new HeaderTop("header", "fixed-top warnabeckground");
    var Port = new Galeri("portfolio", "portfolio", "container", "row portfolio-container", "fade-up", "150");
    var Foot = new Footer("footer", "footer-top", "container", "row", "col-lg-4 col-md-6", "footer-info", "social-links mt-3", "col-lg-2 col-md-6 footer-links", "col-lg-2 col-md-6 footer-links", "col-lg-4 col-md-6 footer-newsletter", "container", "copyright", " Copyright ", "Toretto Garden", ". All Rights Reserved", "credits", "Designed by ");
    document.getElementById("galeryhead").innerHTML = Linkhead.Kunci();
    document.getElementById("galeryHd").innerHTML = Head.Kunci();
    document.getElementById("galeryfoto").innerHTML = Port.Kunci();
    document.getElementById("galeryfoot").innerHTML = Foot.Kunci();
}
