window.onload = function () {
  const table = document.querySelector('.table');
  // console.dir(table);
  let gameArr = [
    [0, 0, 0],  //   1  is  X;
    [0, 0, 0],  //  -1  is  O
    [0, 0, 0]   //   0  is  empty
  ];
  let gameLabel = true; // true  is  X   ...   false  is  O

  function game (event) {
    let id = event.target.id;
    console.dir(event.target);

    if (gameArr[+id[0]][+id[1]] === 0) {
      gameArr[+id[0]][+id[1]] = gameLabel ? 1 : -1;
      event.target.innerText = gameLabel ? 'X' : 'O';
      gameLabel = !gameLabel;

      if (checkRow(id[0])) {
        // table.removeEventListener('click', game);
        console.log('gameOver');
      }
    }
    console.log(gameArr);
  }

  function checkRow (row) {
    let result = 0;
    for (let i = 0; i <= 2; i++) {
      result += gameArr[row][i];
    }
    return Math.abs(result) === 3;
  }

  table.addEventListener('click', game);



//  TODO: table.removeEventListener('click', game)
};