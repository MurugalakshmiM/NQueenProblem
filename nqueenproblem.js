let a =[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
let tempArray = [];
a.map((item, index) => {
    tempArray[index] = [...item];
});
let changedArray = [tempArray];
let position = [[0, 0]];
markQueen(position[0], [...a])
function markQueen(pos, array) {
    array[pos[0]][pos[1]] = 'Q'
    for (let i = pos[0] + 1; i < a.length; i++) {
        array[i][pos[1]] = 1
    }
    for (let i = pos[1] - 1; i >= 0; i--) {
        array[pos[0]][i] = 1
    }
    for (let i = pos[1] + 1; i < a.length; i++) {
        array[pos[0]][i] = 1
    }
    for (let i = pos[0] + 1, j = pos[1] + 1; j < a.length && i < a.length;) {
        array[i][j] = 1
        i = i + 1;
        j = j + 1
    }
    for (let i = pos[0] + 1, j = pos[1] - 1; j >= 0 && i < a.length;) {
        array[i][j] = 1
        i = i + 1;
        j = j - 1
    }
    if (pos[0] != a.length-1 ) {
        demopos = array[pos[0] + 1].indexOf(0);
        let temp = []
        array.map((item, index) => {
            temp[index] = [...item];
        });
        changedArray[pos[0] + 1] = temp;
        if (demopos >= 0) {
            array[pos[0] + 1][demopos] = 'Q';
            position[pos[0] + 1] = [pos[0] + 1, demopos];
            markQueen([pos[0] + 1, demopos], [...array])
        } else {
            let tempa = changedArray[pos[0]];
            let count = 0;
            let recPos = pos[0];
            while(count === 0 && recPos >= 0) {
                tempa[recPos].map((item, index) => {
                    if (item == 0 && index > position[recPos][1] && count == 0) {
                        position[recPos][1] = index
                        let temp1 = [];
                        tempa.map((item, index) => {
                            temp1[index] = [...item];
                        });
                        markQueen(position[recPos], temp1);
                        count++;
                    }
                })
                if(count ==0){
                    recPos = recPos -1;
                    tempa = changedArray[recPos];
                }
            }
        }
    }
}
let final = changedArray[a.length-1];
final[a.length-1][final[a.length-1].indexOf(0)] = 'Q'
console.log(final);
console.log(position)

