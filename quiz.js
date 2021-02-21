let cauhoi = 1;
let score = 0;
let click = ''
let dem = 0
let random01 = Math.round(Math.random() * 30);
let z
let traloidung = quiz[random01].traloidung
let diemtuyetdoi = 0
let demcauhoi1 = [random01]
// let gtrỉrandom = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// if (dem <= 30) {giatrirandom[dem] = random01 , dem ++} 
document.getElementById('chuqs').textContent = 'question' + ' '  + String(cauhoi) +' : ';
document.getElementById('text_qs').textContent = String(quiz[random01].cauhoi) + ' ?'
document.getElementById("A").textContent = String(quiz[random01].A) 
document.getElementById("B").textContent = String(quiz[random01].B) 
document.getElementById("C").textContent = String(quiz[random01].C) 
document.getElementById("D").textContent = String(quiz[random01].D)
let tongtime = 0
let i = 21
// if (document.getElementById('container').style.display == 'flex'){
    let x = setInterval(function() {
        if (document.getElementById('container').style.display == 'flex') {
            i --
            tongtime ++
            document.getElementById('time').textContent = 'time : ' + i + ' S' 
            if (i > 15) {document.getElementById('time').style.color = 'blue'}
            if (i == 15) {document.getElementById('time').style.color = 'green'}
            if (i == 10) {document.getElementById('time').style.color = 'yellow'}
            if (i == 5) {document.getElementById('time').style.color = 'red'}
            if (i == 4) {document.getElementById('time').style.color = 'black'}
            if (i == 3) {document.getElementById('time').style.color = 'red'}
            if (i == 2) {document.getElementById('time').style.color = 'black'}
            if (i == 1) {document.getElementById('time').style.color = 'red'}
            if (i == 0) {document.getElementById('time').style.color = 'blue',click = 'E' ,createnewqs()}
        }
    },1000)
// } 

// function compare(a, b){
//     return a-b;
// }
localStorage.setItem('demnguoithi',0)
let thongtin = []


function top01() {
    let ngu = localStorage.getItem('demnguoithi')
    localStorage.setItem('demnguoithi',Number(ngu) + 1)
    let name = document.getElementById('name').value;
    let diachi = document.getElementById('diachi').value;
    let sdt_nhan = document.getElementById('sdt_nhan').value;
    if (name != '' && diachi != '' && sdt_nhan != '') {
        document.getElementById('nhanthuong').style.display = 'none'
        document.getElementById('container').style.display = 'flex'
        document.getElementById('audio1').play()
        thongtin = [0,0,sdt_nhan,name,diachi]
    } else {
        alert('ban chua dien du thong tin')
    }
    // localStorage.setItem('nguoithi' + String(songuoithi),[name,diachi,sdt_nhan])
    // console.log(localStorage.getItem('nguoithi' + String(songuoithi)));
}

let getid_click = function(clicked) {
    click =  clicked;
    console.log(click);
}

let allthongtin = []
let diemsort = []

let nopbai = function() {
    document.getElementById('audio1').pause()
    // crsound('file:///../../public/img_music/30%20Minutes%20of%20Awards%20Music%20For%20Nomination%20Show%20&%20Grand%20Openings%20Compilation.mp3')
    document.getElementById('nhacketqua').play()
    // clearInterval(x)
    // thongtin = thongtin + [score,tongtime]  /*String(Math.floor(tongtime/60) + ' M ' + tongtime%60 + ' S ')*/
    thongtin[0] = score
    thongtin[1] = tongtime
    document.getElementById('score_end').textContent = 'Score : ' + score 
    document.getElementById('tongtime').textContent = 'Time : ' +  Math.floor(tongtime/60) + ' M ' + tongtime%60 + ' S '
    localStorage.setItem('songuoithi'+String(localStorage.getItem('demnguoithi')),thongtin)
    // console.log( localStorage.getItem('songuoithi'+String(localStorage.getItem('demnguoithi'))))
    let allthongtin1 = []
    let demdiemthap = []
    for (let i = 1; i < Number(localStorage.getItem('demnguoithi'))+1; i++) {
            // console.log(localStorage.getItem('songuoithi'+String(i)),i)
            allthongtin[i-1] = localStorage.getItem('songuoithi'+String(i)).split(",")
            if (allthongtin[i-1][0].length >= 2) {allthongtin1.push(allthongtin[i-1]) } else {demdiemthap.push(allthongtin[i-1])}
    }  
    allthongtin1.sort()
    a = allthongtin1.reverse()
    localStorage.setItem('top1',a[0])
    if (localStorage.getItem('songuoithi'+String(localStorage.getItem('demnguoithi'))) == localStorage.getItem('top1')) {
        document.getElementById('new_record').style.display = 'block'
    } else {document.getElementById('dattop').style.display = 'flex'}
    localStorage.setItem('top2',a[1])
    localStorage.setItem('top3',a[2])
    let demnguoithi1 = localStorage.getItem('demnguoithi')
    for (let i = 1; i < allthongtin1.length + 1; i++) {
        if (localStorage.getItem('songuoithi'+String(localStorage.getItem('demnguoithi'))) == a[i-1]) {document.getElementById('text_top').textContent = String(i)}
            document.getElementById('table_top').innerHTML += `
                                                <tr>
                                                    <td>${i}</td>
                                                    <td>${allthongtin1[i-1][0]}</td>
                                                    <td>${allthongtin1[i-1][1]}</td>
                                                    <td>${allthongtin1[i-1][3]}</td>
                                                </tr>
                                                `        
    }                             
    demdiemthap.sort()
    demdiemthap.reverse()
    for (let i = 0; i < demdiemthap.length;i ++ ){
        document.getElementById('table_top').innerHTML += `
                                                <tr>
                                                    <td>${Number(demnguoithi1) - demdiemthap.length  + i + 1 }</td>
                                                    <td>${demdiemthap[i][0]}</td>
                                                    <td>${demdiemthap[i][1]}</td>
                                                    <td>${demdiemthap[i][3]}</td>
                                                </tr>
                                                `  
    }
    document.getElementById('header').style.display = 'none'
    document.getElementById('container').style.display = 'none'
    document.getElementById('ketqua').style.display = 'block'
}


// function crsound(src) {
//     this.sound = document.createElement("audio");
//     this.sound.src = src;
//     this.sound.setAttribute("preload", "auto");
//     this.sound.setAttribute("controls", "none");
//     this.sound.style.display = "none";
//     document.body.appendChild(this.sound);
//     this.play = function(){
//       this.sound.play();
//     }
//     this.stop = function(){
//       this.sound.pause();
//     }
//     this.play()
//   }

function createnewqs() {
    // if (cauhoi <= 30) {
        if (click.length == 0) {
            alert('vui long chon dap an')
        }else {
            i = 21
            document.getElementById('time').style.color = 'blue'
            if (click == traloidung) {
                score ++
                document.getElementById('score').textContent = 'Score :' + score
                document.getElementById('kq'+String(cauhoi)).style.color = ' rgb(42, 250, 0)'
                document.getElementById('kq'+String(cauhoi)).textContent = '✔' 
                // crsound('file:///C:/Users/Admin/use%20--add/img_music/Correct%20Answer%20%233%20Sound%20Effect%20(mp3cut.net).mp3')
                document.getElementById('dung').play()
                setTimeout(function(){document.getElementById('dung').pause()},2000)
            } else {
                document.getElementById('kq'+String(cauhoi)).style.color = 'red',
                document.getElementById('kq'+String(cauhoi)).textContent = '✘'
                document.getElementById('sai').play()
                setTimeout(function(){document.getElementById('sai').pause()},2000)
                // crsound('file:///C:/Users/Admin/use%20--add/img_music/Wrong-answer-sound-effect.mp3')
            }
            // let dem1 = 0;
            random01 = Math.round(Math.random() * 30);
            let demloi1 = 0
            for (let i = 0; i < demcauhoi1.length ; i++) {
                if (random01 == demcauhoi1[i]) {
                    random01 = random01 + 20
                    demloi1 = demloi1 + 1;
                    if (demloi1 == 2) {
                        random01 = random01 - 20 
                    } 
                }    
            }
            demcauhoi1.push(random01)
            traloidung = quiz[random01].traloidung
            console.log(cauhoi,'            ',random01)
            // for (let i =0; i < gtrỉrandom.length;i++){
            //     if (random01 == gtrỉrandom[i]) {
            //         random01 = Math.round(Math.random() * 100);
            //     } else{ dem1 ++}
            // }
            // if (dem1  30) 

            cauhoi ++
            if (cauhoi == 31) {document.getElementById('chuqs').textContent = 'question' + ' '  + String(30) +' : ';}
            else{document.getElementById('chuqs').textContent = 'question' + ' '  + String(cauhoi) +' : ';}
            document.getElementById('text_qs').textContent = String(quiz[random01].cauhoi) + ' ?'
            document.getElementById("A").textContent = String(quiz[random01].A) 
            document.getElementById("B").textContent = String(quiz[random01].B) 
            document.getElementById("C").textContent = String(quiz[random01].C) 
            document.getElementById("D").textContent = String(quiz[random01].D)
            click = ''

            if (cauhoi == 31) { setTimeout(function() {nopbai()},500) } else {}
        } 
    // }else {nopbai()}
}

// localStorage.setItem('songuoithi',localStorage.getItem('nguoithi') + thongtin)
// console.log(localStorage.getItem('nguoithi'))
// localStorage.removeItem('songuoithi')
// localStorage.removeItem('songuoithi17')
// localStorage.removeItem('songuoithi18')
// localStorage.removeItem('songuoithi19')
// localStorage.removeItem('songuoithi20')
// localStorage.removeItem('songuoithi21')
// localStorage.removeItem('songuoithi22')
// localStorage.removeItem('songuoithi23')
// localStorage.removeItem('feedback3')
// localStorage.removeItem('songuoithi8')
// localStorage.removeItem('songuoithi7')
// localStorage.removeItem('songuoithi6')
// localStorage.removeItem('songuoithi5')
// localStorage.removeItem('songuoithi4')
// localStorage.removeItem('songuoithi3')
// localStorage.removeItem('songuoithi2')
// localStorage.removeItem('songuoithi1')
// localStorage.removeItem('top3')
// localStorage.removeItem('top2')
// localStorage.removeItem('top1')

