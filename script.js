  // 1
  function showAlert() {
    alert("alertされました！")
  }
  showAlert()

  // 2
  var number = function(){
    return "12345"
  }
  console.log(number());

  // 3
  // スコープとは変数の名前や関数などの参照できる範囲を決めるもの。
  // スコープの中で定義された変数はスコープの内側でのみ参照でき、スコープの外側からは参照できない。
