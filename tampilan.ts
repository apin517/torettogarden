class H{
    public ukuran: string;
    public isi: string;

    public constructor(ukuran: string, isi: string) {
        this.ukuran = ukuran;
        this.isi = isi;
    }

    public Kunci(){
        return`
        <h${this.ukuran}>${this.isi}</h${this.ukuran}>
        `;
    }
}

class A{
    public href: string;
    public teks: string;

    public constructor(href: string, teks: string){
        this.href = href;
        this.teks = teks;
    }

    public Kunci(){
        return`
        <a href="${this.href}">${this.teks}</a>
        `;
    }
}

class HA{
    public size: string;
    public classH: string;
    public AlinkH: A;

    public constructor(size: string,classH: string,href: string, teks: string){
        this.size = size;
        this.classH = classH;
        this.AlinkH = new A(href,teks);
    }

    public Kunci(){
        return`
        <h${this.size} class="${this.classH}">${this.AlinkH.Kunci()}</h${this.size}>
        `;
    }
}

class Li{
    public Alink: A;

    public constructor(link: string, t: string){
        this.Alink= new A(link, t);
    }

    public Kunci(){
        return`
        <li>${this.Alink.Kunci()}</li>
        `;
    }
}

class Ul{
    public Home: Li;
    public Fitur: Li;
    public Paket: Li;
    public Galeri: Li;

    public constructor(linkhome: string, tekshome: string, linkfitur: string, teksfitur: string, linkpaket: string, tekspaket: string, linkgaleri: string, teksgaleri: string){
        this.Home = new Li(linkhome, tekshome);
        this.Fitur = new Li(linkfitur, teksfitur);
        this.Paket = new Li(linkpaket, tekspaket);
        this.Galeri = new Li(linkgaleri, teksgaleri);
    }

    public Kunci(){
        return`
        <ul>
            ${this.Home.Kunci()}
            ${this.Fitur.Kunci()}
            ${this.Paket.Kunci()}
            ${this.Galeri.Kunci()}
        </ul>
        `;
    }
}

class Nav{
    public Isinavbar: Ul;
    public classnavbar: string;

    public constructor(classnavbar: string, linghome: string, teksshome: string, lingfitur: string, tekssfitur: string, lingpaket: string, teksspaket: string, linggaleri: string, tekssgaleri: string) {
        this.classnavbar = classnavbar;
        this.Isinavbar = new Ul(linghome, teksshome, lingfitur, tekssfitur, lingpaket, teksspaket, linggaleri, tekssgaleri);
    }

    public Kunci(){
        return`
        <nav class="${this.classnavbar}">
            ${this.Isinavbar.Kunci()}
        </nav>
        `;
    }
}

class DivHeader{
    public classdivheader: string;
    public Logo: HA;
    public Navbar: Nav;
    
    public constructor(classdivheader: string, size: string,classH: string,href: string, teks: string, classnavbar: string, linghome: string, teksshome: string, lingfitur: string, tekssfitur: string, lingpaket: string, teksspaket: string, linggaleri: string, tekssgaleri: string){
        this.classdivheader = classdivheader;
        this.Logo = new HA(size,classH,href,teks)
        this.Navbar = new Nav(classnavbar, linghome, teksshome, lingfitur, tekssfitur, lingpaket, teksspaket, linggaleri, tekssgaleri)
    }

    public Kunci(){
        return`
            <div class="${this.classdivheader}">
                ${this.Logo.Kunci()}
                ${this.Navbar.Kunci()}
            </div>
        `;
    }
}

class HeaderTop{
    public id: string;
    public classheader: string;
    public IsiDiv: DivHeader;

    public constructor(id: string, classheader: string){
        this.id = id;
        this.classheader = classheader;
        this.IsiDiv = new DivHeader("container d-flex align-items-center","1","logo mr-auto","index.html","Toretto Garden","nav-menu d-none d-lg-block","tampilan.html","Home","Fitur.html","Fitur","Paket.html","Paket","galery.html","Galery")
    }

    public Kunci(){
        return`
        <header id="${this.id}" class="${this.classheader}">
            ${this.IsiDiv.Kunci()}
        </header>
        `;
    }
}

class I{
    public classI: string;

    public constructor(classI: string){
        this.classI = classI;
    }

    public Kunci(){
        return`
        <i class="${this.classI}"></i>
        `;
    }
}

class AI{
    public href: string;
    public ClassA: string;
    public ClassI: I;

    public constructor(href: string, ClassA: string, classI: string){
        this.href = href;
        this.ClassA = ClassA;
        this.ClassI = new I(classI);
    }

    public Kunci(){
        return`
        <a href="${this.href}" class="${this.ClassA}">${this.ClassI.Kunci()}</a>
        `;
    }
}

class DivAI{
    public idDiv: string;
    public classDiv: string;
    public class1: string;
    public class2: string;
    public I1: I;
    public A1: A;
    public I2: I;
    public nomerHP: string;
    public class3: string;
    public AI1: AI;
    public AI2: AI;
    public AI3: AI;
    public AI4: AI;
    public AI5: AI;

    public constructor(idDiv: string,classDiv: string,class1: string,class2: string,nomerHP: string,class3: string){
        this.idDiv = idDiv;
        this.classDiv = classDiv;
        this.class1 = class1;
        this.class2 = class2;
        this.I1 = new I("icofont-envelope");
        this.A1 = new A("#","Torettogarden@gmail.com");
        this.I2 = new I("icofont-phone");
        this.nomerHP = nomerHP;
        this.class3 = class3;
        this.AI1 = new AI("#","twitter","icofont-twitter");
        this.AI2 = new AI("#","facebook","icofont-facebook");
        this.AI3 = new AI("#","instagram","icofont-instagram");
        this.AI4 = new AI("#","skype","icofont-skype");
        this.AI5 = new AI("#","linkedin","icofont-linkedin");
    }

    public Kunci(){
        return`
        <div id="${this.idDiv}" class="${this.classDiv}">
            <div class="${this.class1}">
                <div class="${this.class2}">
                    ${this.I1.Kunci()}
                    ${this.A1.Kunci()}
                    ${this.I2.Kunci()}
                    ${this.nomerHP}
                </div>
                <div class="${this.class3}">
                    ${this.AI1.Kunci()}
                    ${this.AI2.Kunci()}
                    ${this.AI3.Kunci()}
                    ${this.AI4.Kunci()}
                    ${this.AI5.Kunci()}
                </div>
            </div>
        </div>
        `;                
    }
}

class SelectHome{
    public idSH: string;
    public classSH: string;
    public classDivSH: string;
    public dataoasSH: string;
    public dataoasdelaySH: string;
    public H1: H;    
    public H2: H;    

    public constructor(idSH: string,classSH: string,classDivSH: string,dataoasSH: string,dataoasdelaySH: string){
        this.idSH = idSH;
        this.classSH = classSH;
        this.classDivSH = classDivSH;
        this.dataoasSH = dataoasSH;
        this.dataoasdelaySH = dataoasdelaySH;
        this.H1 = new H("1", "Welcome Toretto Garden");
        this.H2 = new H("2", "Terima jasa bumi bangunan");
    }

    public Kunci(){
        return`
        <section id="${this.idSH}" class="${this.classSH}">
            <div class="${this.classDivSH}" data-aos="${this.dataoasSH}" data-aos-delay="${this.dataoasdelaySH}">
                ${this.H1.Kunci()}
                ${this.H2.Kunci()}
            </div>
        </section>
        `;
    }
}

class LiIA{
    public LiI: I;
    public LiA: A;

    public constructor(clss: string, hrf: string, tks: string){
        this.LiI = new I(clss)
        this.LiA = new A(hrf, tks)
    }

    public Kunci(){
        return`
        <li>
            ${this.LiI.Kunci()}
            ${this.LiA.Kunci()}
        </li>
        `;
    }
}

class P{
    public textisi: string;

    public constructor(textisi: string){
        this.textisi = textisi;
    }

    public Kunci(){
        return`
        <p>${this.textisi}</p>
        `;                
    }
}

class Footer{
    public idfooter: string;
    public classdiv1: string;
    public classdiv2: string;
    public classdiv3: string;        
    public classdiv4: string;        
    public classdiv5: string;
    public H1footer: H;
    public PFooter1: P;
    public classdiv6: string;
    public AI1Footer: AI;
    public AI2Footer: AI;
    public AI3Footer: AI;
    public AI4Footer: AI;
    public AI5Footer: AI;
    public classdiv7: string;
    public H2footer: H;
    public lia1: LiIA;
    public lia2: LiIA;
    public lia3: LiIA;
    public lia4: LiIA;
    public classdiv8: string;
    public H3footer: H;
    public lia5: LiIA;
    public lia6: LiIA;
    public lia7: LiIA;
    public classdiv9: string;
    public H4footer: H;
    public PFooter2: P;
    public classdiv10: string;
    public classdiv11: string;
    public text1: string;
    public text2: string;
    public text3: string;
    public text4: string;
    public classdiv12: string;
    public Acopy: A;
    
    public constructor(idfooter: string, classdiv1: string, classdiv2: string, classdiv3: string, classdiv4: string, classdiv5: string, classdiv6: string, classdiv7: string, classdiv8: string, classdiv9: string, classdiv10: string, classdiv11: string, text1: string, text2: string, text3: string, classdiv12: string, text4: string){
        this.idfooter = idfooter;
        this.classdiv1 = classdiv1;
        this.classdiv2 = classdiv2;
        this.classdiv3 = classdiv3;
        this.classdiv4 = classdiv4;
        this.classdiv5 = classdiv5;
        this.H1footer = new H("3", "Toretto GARDEN");
        this.PFooter1 = new P("Jl. IKan Bakar RT/RW 10/10<br>Rasa Semongko, Giri<br>Banyuwangi<br><br><strong>Phone:</strong> +62 8520 4583 724<br><strong>Email:</strong> Torettogarden@gmail.com<br>");
        this.classdiv6 = classdiv6;
        this.AI1Footer = new AI("#","twitter","icofont-twitter");
        this.AI2Footer = new AI("#","facebook","icofont-facebook");
        this.AI3Footer = new AI("#","instagram","icofont-instagram");
        this.AI4Footer = new AI("#","skype","icofont-skype");
        this.AI5Footer = new AI("#","linkedin","icofont-linkedin");
        this.classdiv7 = classdiv7;
        this.H2footer = new H("4","Useful Links");
        this.lia1 = new LiIA("bx bx-chevron-right","home.html","Home");
        this.lia2 = new LiIA("bx bx-chevron-right","About.html","Fitur");
        this.lia3 = new LiIA("bx bx-chevron-right","paket.html","Paket");
        this.lia4 = new LiIA("bx bx-chevron-right","galery.html","Galery");
        this.classdiv8 = classdiv8;
        this.H3footer = new H("4","Facilities");
        this.lia5 = new LiIA("bx bx-chevron-right","#","Garansi");
        this.lia6 = new LiIA("bx bx-chevron-right","#","Free 1 Spring Beed");
        this.lia7 = new LiIA("bx bx-chevron-right","#","Discount");
        this.classdiv9 = classdiv9;
        this.H4footer = new H("4","감사합니다 (Terimakasih)");
        this.PFooter2 = new P("Terimakasih telah menuju aplikasi kami, semoga pelayanan kami memuat anda puas");
        this.classdiv10 = classdiv10;
        this.classdiv11 = classdiv11;
        this.text1 = text1;
        this.text2 = text2;
        this.text3 = text3;
        this.classdiv12 = classdiv12;
        this.text4 = text4;
        this.Acopy = new A("home.html","Toretto Garden");
    }

    public Kunci(){
        return`
        <footer id="${this.idfooter}">
            <div class="${this.classdiv1}">
                <div class="${this.classdiv2}">
                    <div class="${this.classdiv3}">
                        <div class="${this.classdiv4}">
                            <div class="${this.classdiv5}">
                                ${this.H1footer.Kunci()}
                                ${this.PFooter1.Kunci()}
                                <div class="${this.classdiv6}">
                                    ${this.AI1Footer.Kunci()}
                                    ${this.AI2Footer.Kunci()}
                                    ${this.AI3Footer.Kunci()}
                                    ${this.AI4Footer.Kunci()}
                                    ${this.AI5Footer.Kunci()}
                                </div>
                            </div>
                        </div>
                        <div class="${this.classdiv7}">
                            ${this.H2footer.Kunci()}
                            <ul>
                                ${this.lia1.Kunci()}
                                ${this.lia2.Kunci()}
                                ${this.lia3.Kunci()}
                                ${this.lia4.Kunci()}
                            </ul>
                        </div>
                        <div class="${this.classdiv8}">
                            ${this.H3footer.Kunci()}
                            <ul>    
                                ${this.lia5.Kunci()}
                                ${this.lia6.Kunci()}
                                ${this.lia7.Kunci()}
                            </ul>
                        </div>
                        <div class="${this.classdiv9}">
                            ${this.H4footer.Kunci()}
                            ${this.PFooter2.Kunci()}
                        </div>
                    </div>
                </div>
            </div>
            <div class="${this.classdiv10}">
                <div class="${this.classdiv11}">
                    &copy; ${this.text1} <strong><span>${this.text2}</span></strong>${this.text3}
                </div>
                <div class="${this.classdiv12}">
                    ${this.text4}${this.Acopy.Kunci()}
                </div>
            </div>
        </footer>
        `;
    }
}

class Span{
    public text: string;

    public constructor(text: string){
        this.text = text;
    }

    public Kunci(){
        return`
        <span>${this.text}</span>
        `;
    }
}

class SectionTitle{
    public STclass: string;
    public STspan: Span;
    public STh2: H;
    public STparagraf: P;

    public constructor(STclass: string, STtext: string, STukuran: string, STisi: string, STtextisi: string){
        this.STclass = STclass;
        this.STspan = new Span(STtext);
        this.STh2 = new H(STukuran, STisi);
        this.STparagraf = new P(STtextisi);
    }

    public Kunci(){
        return`
        <div class="${this.STclass}">
            <br>
            ${this.STspan.Kunci()}
            ${this.STh2.Kunci()}
            ${this.STparagraf.Kunci()}
        </div>
        `;
    }
}

class Img{
    public classImg: string;
    public srcImg: string;
    public altImg: string;

    public constructor(classImg: string,srcImg: string,altImg: string){
        this.classImg = classImg;
        this.srcImg = srcImg;
        this.altImg = altImg;
    }

    public Kunci(){
        return`
        <img class="${this.classImg}" src="${this.srcImg}" alt="${this.altImg}">
        `;
    }
}

class DataMember{
    public DMclass1: string;
    public DMdataaos: string;
    public DMclass2: string;
    public DMimg: Img;
    public DMh1: H;

    public constructor(DMclass1: string,DMdataaos: string,DMclass2: string,DMclass: string,DMsrc: string,DMalt: string,DMukuran: string,DMisi: string){
        this.DMclass1 = DMclass1;
        this.DMdataaos = DMdataaos;
        this.DMclass2 = DMclass2;
        this.DMimg = new Img(DMclass,DMsrc,DMalt);
        this.DMh1 = new H(DMukuran,DMisi);
    }

    public Kunci(){
        return`
        <div class="${this.DMclass1}" data-aos="${this.DMdataaos}">
            <div class="${this.DMclass2}">
                ${this.DMimg.Kunci()}
                ${this.DMh1.Kunci()}
            </div>
        </div>
        `;
    }
}

class LayoutPlan{
    public LPid: string;
    public LPsecclass: string;
    public LPdivclass1: string;
    public LPsectiontitle: SectionTitle;
    public LPdivclass2: string;
    public LPdatamember1: DataMember;
    public LPdatamember2: DataMember;
    public LPdatamember3: DataMember;

    public constructor(LPid: string,LPsecclass: string,LPdivclass1: string,LPdivclass2: string){
        this.LPid = LPid;
        this.LPsecclass = LPsecclass;
        this.LPdivclass1 = LPdivclass1;
        this.LPsectiontitle = new SectionTitle("section-title","Layout Plan","2","Layout Plan","Sebuah tampilan sketsa bangunan perumahan Toretto Garden");
        this.LPdivclass2 = LPdivclass2;
        this.LPdatamember1 = new DataMember("col-lg-4 col-md-6 d-flex align-items-stretch","zoom-in","member","gambar","images.jpg","","4","Sketsa Sultan");
        this.LPdatamember2 = new DataMember("col-lg-4 col-md-6 d-flex align-items-stretch","zoom-in","member","gambar","l3.jpg","","4","Sketsa Umum");
        this.LPdatamember3 = new DataMember("col-lg-4 col-md-6 d-flex align-items-stretch","zoom-in","member","gambar","gambar.jpg","","4","Sketsa Istimewa");
    }

    public Kunci(){
        return`
        <section id="${this.LPid}" class="${this.LPsecclass}">
            <div class="${this.LPdivclass1}">
                ${this.LPsectiontitle.Kunci()}
                <div class="${this.LPdivclass2}">
                    ${this.LPdatamember1.Kunci()}
                    ${this.LPdatamember2.Kunci()}
                    ${this.LPdatamember3.Kunci()}
                </div>
            </div>
        </section>
        `;
    }
}

class DaftarFasilitas{
    public DFclass1: string;
    public DFdataaos: string;
    public DFdelay: string;
    public DFclass2: string;
    public DFclass3: string;
    public DFi: I;
    public DFukuran: string;
    public DFa: A;
    public DFp: P;

    public constructor(DFclass1: string,DFdataaos: string,DFdelay: string,DFclass2: string,DFclass3: string,DFclassi: string,DFukuran: string,DFhref: string,DFteks: string,DFtextisi: string){
        this.DFclass1 = DFclass1;
        this.DFdataaos = DFdataaos;
        this.DFdelay = DFdelay;
        this.DFclass2 = DFclass2;
        this.DFclass3 = DFclass3;
        this.DFi = new I(DFclassi);
        this.DFukuran = DFukuran;
        this.DFa = new A(DFhref,DFteks);
        this.DFp = new P(DFtextisi);
    }

    public Kunci(){
        return`
        <div class="${this.DFclass1}" data-aos="${this.DFdataaos}" data-aos-delay="${this.DFdelay}">
            <div class="${this.DFclass2}">
                <div class="${this.DFclass3}>
                    ${this.DFi.Kunci()}
                </div>
                <h${this.DFukuran}>${this.DFa.Kunci()}</h${this.DFukuran}>
                ${this.DFp.Kunci()}
            </div>
        </div>
        `;
    }
}

class Facilities{
    public Fid: string;
    public Fsecclass: string;
    public Fdivclass1: string;
    public Fsectitle: SectionTitle;
    public Fdivclass2: string;
    public Fdaftar1: DaftarFasilitas;
    public Fdaftar2: DaftarFasilitas;
    public Fdaftar3: DaftarFasilitas;

    public constructor(Fid: string,Fsecclass: string,Fdivclass1: string,Fdivclass2: string){
        this.Fid = Fid;
        this.Fsecclass = Fsecclass;
        this.Fdivclass1 = Fdivclass1;
        this.Fsectitle = new SectionTitle("section-title","Facilities","2","Facilities","Memberikan Kenyamanan Tempat Tinggal Bagi Anda");
        this.Fdivclass2 = Fdivclass2;
        this.Fdaftar1 = new DaftarFasilitas("col-lg-4 col-md-6 d-flex align-items-stretch","fade-up","1","icon-box","icon","bx bx-file","4","","Garansi","Garansi untuk perbaikan selama 1 tahun");
        this.Fdaftar2 = new DaftarFasilitas("col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0","fade-up","150","icon-box","icon","bx bx-file","4","","Free 1 Spring Beed","jika anda pesan melalui website kami maka akan mendapat 1 spring Beed");
        this.Fdaftar3 = new DaftarFasilitas("col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0","fade-up","300","icon-box","icon","bx bx-file","4","","Discount","Diskon ini tersedia pada Opening sebesar 25% dan pada periode tertentu sebesar 15%");
    }

    public Kunci(){
        return`
        <section id="${this.Fid}" class="${this.Fsecclass}">
            <div class="${this.Fdivclass1}">
                ${this.Fsectitle.Kunci()}
                <div class="${this.Fdivclass2}">
                    ${this.Fdaftar1.Kunci()}
                    ${this.Fdaftar2.Kunci()}
                    ${this.Fdaftar3.Kunci()}
                </div>
            </div>
        </section>
        `;
    }
}

class Package{
    public Fid: string;
    public Fsecclass: string;
    public Fdivclass1: string;
    public Fsectitle: SectionTitle;
    public Fdivclass2: string;
    public Fdaftar1: DaftarFasilitas;
    public Fdaftar2: DaftarFasilitas;
    public Fdaftar3: DaftarFasilitas;

    public constructor(Fid: string,Fsecclass: string,Fdivclass1: string,Fdivclass2: string){
        this.Fid = Fid;
        this.Fsecclass = Fsecclass;
        this.Fdivclass1 = Fdivclass1;
        this.Fsectitle = new SectionTitle("section-title","Paket","2","Paket","Memberikan Kenyamanan Tempat Tinggal Bagi Anda");
        this.Fdivclass2 = Fdivclass2;
        this.Fdaftar1 = new DaftarFasilitas("col-lg-4 col-md-6 d-flex align-items-stretch","fade-up","1","icon-box","icon","bx bx-file","4","","Paket 1","Bangunan dengan Luas 600 m x 400 m");
        this.Fdaftar2 = new DaftarFasilitas("col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0","fade-up","150","icon-box","icon","bx bx-file","4","","Paket 2","Bangunan dengan Luas 400 m x 250 m");
        this.Fdaftar3 = new DaftarFasilitas("col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0","fade-up","300","icon-box","icon","bx bx-file","4","","Paket 3","Bangunan dengan Luas 200 m x 100 m");
    }

    public Kunci(){
        return`
        <section id="${this.Fid}" class="${this.Fsecclass}">
            <div class="${this.Fdivclass1}">
                ${this.Fsectitle.Kunci()}
                <div class="${this.Fdivclass2}">
                    ${this.Fdaftar1.Kunci()}
                    ${this.Fdaftar2.Kunci()}
                    ${this.Fdaftar3.Kunci()}
                </div>
            </div>
        </section>
        `;
    }
}

class AIPor{
    public href1: string;
    public datagall: string;
    public classA1: string;
    public title1: string;
    public classI1: I;
    public href2: string;
    public classA2: string;
    public title2: string;
    public classI2: I;

    public constructor(href1: string, datagall: string, classA1: string, title1: string, classi1: string, href2: string, classA2: string, title2: string, classI2: string){
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

    public Kunci(){
        return`
        <a href="${this.href1}" data-gall="${this.datagall}" class="${this.classA1}" title="${this.title1}">
            ${this.classI1.Kunci()}
        </a>
        <a href="${this.href2}" class="${this.classA2}" title="${this.title2}">
            ${this.classI2.Kunci()}
        </a>
        `
    }
}

class Portofolio{
    public Pordiv1 : string;
    public Porimgsrc: Img;
    public Pordiv2: string;
    public Porh: H;
    public Porp: P;
    public Porai1: AIPor;

    public constructor(Pordiv1 : string, classImg: string,srcImg: string,altImg: string, Pordiv2: string, size: string, isi:string, txtisi: string, href11:string, datagall1: string, classA11: string, title11: string, classI11: string, href21: string, classA21: string, title21: string, classI21: string){
        this.Pordiv1 = Pordiv1;
        this.Porimgsrc = new Img(classImg,srcImg,altImg);
        this.Pordiv2 = Pordiv2;
        this.Porh = new H(size,isi);
        this.Porp = new P(txtisi);
        this.Porai1 = new AIPor(href11,datagall1,classA11,title11,classI11,href21,classA21,title21,classI21);
    }

    public Kunci(){
        return`
        <div class="${this.Pordiv1}">
            ${this.Porimgsrc.Kunci()}
            <div class="${this.Pordiv2}">
                ${this.Porh.Kunci()}
                ${this.Porp.Kunci()}
                ${this.Porai1.Kunci()}
            </div>
        </div>
        `
    }
}

class Galeri{
    public Gid: string;
    public Gsecclass: string;
    public Gdivclass1: string;
    public Gsectitle: SectionTitle;
    public Gdivclass2: string;
    public Gdataaos: string;
    public Gdataaosdelay: string;
    public Gportofolio1: Portofolio;
    public Gportofolio2: Portofolio;
    public Gportofolio3: Portofolio;
    public Gportofolio4: Portofolio;
    public Gportofolio5: Portofolio;

    public constructor(Gid: string, Gsecclass: string, Gdivclass1: string, Gdivclass2: string, Gdataaos: string, Gdataaosdelay: string){
        this.Gid = Gid;
        this.Gsecclass = Gsecclass;
        this.Gdivclass1 = Gdivclass1;
        this.Gsectitle = new SectionTitle("section-title","Galery","2","Galery","Menampilkan Bangunan Perumahan Yang Telah Jadi dari Toretto Garden");
        this.Gdivclass2 = Gdivclass2;
        this.Gdataaos = Gdataaos;
        this.Gdataaosdelay = Gdataaosdelay;
        this.Gportofolio1 = new Portofolio("col-lg-4 col-md-6 portfolio-item filter-app","img-fluid","Screenshot_7-1024x569.jpg","","portfolio-info","4","App 1","App","assets/img/portfolio/portfolio-1.jpg","portfolioGallery","venobox preview-link","App 1","bx bx-plus","portfolio-details.html","details-link","More Details","bx bx-link")
        this.Gportofolio2 = new Portofolio("col-lg-4 col-md-6 portfolio-item filter-web","img-fluid","Screenshot_17-1024x574.jpg","","portfolio-info","4","Web 1","Web","assets/img/portfolio/portfolio-2.jpg","portfolioGallery","venobox preview-link","Web 1","bx bx-plus","portfolio-details.html","details-link","More Details","bx bx-link")
        this.Gportofolio3 = new Portofolio("col-lg-4 col-md-6 portfolio-item filter-app","img-fluid","perum.jpeg","","portfolio-info","4","App 2","App","assets/img/portfolio/portfolio-3.jpg","portfolioGallery","venobox preview-link","App 2","bx bx-plus","portfolio-details.html","details-link","More Details","bx bx-link")
        this.Gportofolio4 = new Portofolio("col-lg-4 col-md-6 portfolio-item filter-card","img-fluid","gardentoretto.jpg","","portfolio-info","4","Card 1","Card","assets/img/portfolio/portfolio-4.jpg","portfolioGallery","venobox preview-link","Card 1","bx bx-plus","portfolio-details.html","details-link","More Details","bx bx-link")
        this.Gportofolio5 = new Portofolio("col-lg-4 col-md-6 portfolio-item filter-web","img-fluid","torettogreden.jpg","","portfolio-info","4","Web 2","Web","assets/img/portfolio/portfolio-5.jpg","portfolioGallery","venobox preview-link","Web 2","bx bx-plus","portfolio-details.html","details-link","More Details","bx bx-link")
    }

    public Kunci(){
        return`
        <section id="${this.Gid}" class="${this.Gsecclass}">
            <div class="${this.Gdivclass1}">
                ${this.Gsectitle.Kunci()}
                <div class="${this.Gdivclass2}" data-aos="${this.Gdataaos}" data-aos-delay="${this.Gdataaosdelay}">
                    ${this.Gportofolio1.Kunci()}
                    ${this.Gportofolio2.Kunci()}
                    ${this.Gportofolio3.Kunci()}
                    ${this.Gportofolio4.Kunci()}
                    ${this.Gportofolio5.Kunci()}
                </div>
            </div>
        </section>
        `
    }
}

function Home(){
    let Linkhead = new DivAI("topbar","d-none d-lg-flex align-items-center fixed-top","container d-flex","contact-info mr-auto","+62 8520 4583 724","social-links");
    let Head = new HeaderTop("header","fixed-top");
    let Section = new SelectHome("hero","d-flex align-items-center","container position-relative","fade-up","500")
    let Foot = new Footer("footer","footer-top","container","row","col-lg-4 col-md-6","footer-info","social-links mt-3","col-lg-2 col-md-6 footer-links","col-lg-2 col-md-6 footer-links","col-lg-4 col-md-6 footer-newsletter","container","copyright"," Copyright ","Toretto Garden",". All Rights Reserved","credits","Designed by ")

    document.getElementById("divlinkhead").innerHTML = Linkhead.Kunci();
    document.getElementById("divhead").innerHTML = Head.Kunci();
    document.getElementById("sectinoCon").innerHTML = Section.Kunci();
    document.getElementById("divfooter").innerHTML = Foot.Kunci();
}

function Fitur(){
    let Linkhead = new DivAI("topbar","d-none d-lg-flex align-items-center fixed-top warnabeckground","container d-flex","contact-info mr-auto","+62 8520 4583 724","social-links");
    let Head = new HeaderTop("header","fixed-top warnabeckground");
    let Layouplan = new LayoutPlan("team","team","container","row");
    let fasilitase = new Facilities("services","services","container","row");
    let Foot = new Footer("footer","footer-top","container","row","col-lg-4 col-md-6","footer-info","social-links mt-3","col-lg-2 col-md-6 footer-links","col-lg-2 col-md-6 footer-links","col-lg-4 col-md-6 footer-newsletter","container","copyright"," Copyright ","Toretto Garden",". All Rights Reserved","credits","Designed by ");

    document.getElementById("fiturhead").innerHTML = Linkhead.Kunci();
    document.getElementById("fiturHd").innerHTML = Head.Kunci();
    document.getElementById("fiturLP").innerHTML = Layouplan.Kunci();
    document.getElementById("fiturdaftar").innerHTML = fasilitase.Kunci();
    document.getElementById("fiturfoot").innerHTML = Foot.Kunci();
}

function Paket(){
    let Linkhead = new DivAI("topbar","d-none d-lg-flex align-items-center fixed-top warnabeckground","container d-flex","contact-info mr-auto","+62 8520 4583 724","social-links");
    let Head = new HeaderTop("header","fixed-top warnabeckground");
    let pakett = new Package("services","services","container","row");
    let Foot = new Footer("footer","footer-top","container","row","col-lg-4 col-md-6","footer-info","social-links mt-3","col-lg-2 col-md-6 footer-links","col-lg-2 col-md-6 footer-links","col-lg-4 col-md-6 footer-newsletter","container","copyright"," Copyright ","Toretto Garden",". All Rights Reserved","credits","Designed by ");

    document.getElementById("pakethead").innerHTML = Linkhead.Kunci();
    document.getElementById("paketHd").innerHTML = Head.Kunci();
    document.getElementById("pakett").innerHTML = pakett.Kunci();
    document.getElementById("paketfoot").innerHTML = Foot.Kunci();
}

function Galery(){
    let Linkhead = new DivAI("topbar","d-none d-lg-flex align-items-center fixed-top warnabeckground","container","contact-info mr-auto","+62 8520 4583 724","social-links");
    let Head = new HeaderTop("header","fixed-top warnabeckground");
    let Port = new Galeri("portfolio","portfolio","container","row portfolio-container","fade-up","150");
    let Foot = new Footer("footer","footer-top","container","row","col-lg-4 col-md-6","footer-info","social-links mt-3","col-lg-2 col-md-6 footer-links","col-lg-2 col-md-6 footer-links","col-lg-4 col-md-6 footer-newsletter","container","copyright"," Copyright ","Toretto Garden",". All Rights Reserved","credits","Designed by ");
    
    document.getElementById("galeryhead").innerHTML = Linkhead.Kunci();
    document.getElementById("galeryHd").innerHTML = Head.Kunci();    
    document.getElementById("galeryfoto").innerHTML = Port.Kunci();    
    document.getElementById("galeryfoot").innerHTML = Foot.Kunci();
}