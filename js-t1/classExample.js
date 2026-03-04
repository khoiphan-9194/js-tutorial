


function selectionSort(array,comparator)
{ // 5 , 4 , 3 , 1 , 2

    if (typeof comparator !== 'function') {
        comparator = function(a, b) {
          return a - b;
        };
      }
    
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        
        for ( let j = i+1; j < array.length;j++)
        {
         //   console.log( " min " + array[minIndex] + " " + array[j])
         console.log(i+" "+j)
            // if(array[minIndex] > array[j])
            if (comparator(array[minIndex], array[j]) > 0) // provide more flexibilities when dealing with object
            {
               
                minIndex = j
               
            }
        }
       if(i!==minIndex)
       {
        swap(array,i,minIndex);
        
       }
    }


    return array
}

function swap(array, indexLeft, indexRight)
{
    let temp = array[indexLeft];
    array[indexLeft] = array[indexRight];
    array[indexRight] = temp;
}

function highToLow(a, b) {
    return b.getAve()-a.getAve();
  }
   
// create a class
class Student {


    constructor(lastname,firstname,grade,scores)
    {
        this.lastname = lastname;
        this.firstname = firstname;
        this.grade = grade;
        this.scores = scores;
    }
    printName()
    {
        return `Hello, this is ${this.firstname} ${this.lastname}, in grade ${this.grade}`
    }
    addScore(scoreInput)
    {
        this.scores.push(scoreInput)
        return this.scores
    }
    getAve()
    {
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;

     }

     static rankBy_average(studentObjects)
     {
        return selectionSort(studentObjects,highToLow)

     }
     

     
    

}

let firstStudent = new Student("Colt", "Steele",1,[]);
let secondStudent = new Student("Blue", "Steele",2,[]);
let thirdStudent = new Student("Khoi","Phan",2,[22,55,21])


firstStudent.addScore(9);
firstStudent.addScore(10);
firstStudent.addScore(85);
secondStudent.addScore(80);
secondStudent.addScore(79);
secondStudent.addScore(82);
// console.log(firstStudent)
// console.log(secondStudent)

console.log(firstStudent.getAve())

console.log(secondStudent.getAve())

console.log(thirdStudent.getAve())

console.log(Student.rankBy_average([firstStudent,secondStudent,thirdStudent]))