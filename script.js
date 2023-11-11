const tbl = document.getElementById("tbl");
const toDoList = document.getElementsByClassName("toDoList"); 
const toDoListList = [];

// // 保存機能（後日実装）
// window.addEventListener("beforeunload", function(e){
//   //ページの内容を取得
//   let pageContent = document.body.innerHTML;
//   //ローカルストレージに保存
//   localStorage.setItem('pageContent', pageContent);
// });

// let storedPageContent = localStorage.getItem('pageContent');

// if(storedPageContent){
//   document.body.innerHTML = storedPageContent;
// }


//行追加
function add() {
  //空の行要素を先に作成tr
  let tr = document.createElement("tr");
  tr.classList.toggle("t");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  
  //新しいtd要素を作って変数tdに格納
  let timeSet = document.createElement("input");
  timeSet.type = "time";
  timeSet.classList.toggle("timeSelect");
  let toDo = document.createElement("select");
  toDo.classList.toggle("toDoList");
  let opt = document.createElement("option");
  opt.text = "課題"
  let rest = document.createElement("option");
  rest.text = "休憩"
  toDo.appendChild(opt);
  toDo.appendChild(rest);
  // 配列からデータを取得
    let toDoListListNumber = toDoListList.length;
    for (let i = 0; i < toDoListListNumber; i++) {
      let r = toDoListList[i];
      let inpOpt = document.createElement("option");
      inpOpt.text = r;
      toDo.appendChild(inpOpt);
    }

  // trにtdを追加
  td1.appendChild(timeSet);
  tr.appendChild(td1);
  td2.appendChild(toDo);
  tr.appendChild(td2);

  //完成したtrをtableに追加
  tbl.appendChild(tr);
}
  

//以下、末尾行削除処理
function del() {

  let rw = tbl.rows.length;//行数取得
  if(rw != 1){
    tbl.deleteRow(rw - 1);//最終行を指定して削除
  }
}

function addWord() {
  // テキストの内容を取得
  let addInput = document.getElementById('addInput');
  let content = addInput.value;
  

  if(addInput.value != ""){
    // 表示
    for(let i = 0; i < toDoList.length; i++){
      let a = toDoList[i];
      let addOpt = document.createElement("option");
      addOpt.text = content;
      a.appendChild(addOpt);
    }
    toDoListList.push(content);
  }
  
  // テキストの内容をクリア
  addInput.value = "";
}

