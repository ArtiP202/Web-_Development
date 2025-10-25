let studentInfor = [{name : "Arti",age :20,marks : 90,Course : "Bcs"},
                {name : "Arti",age :20,marks : 90,Course : "Bcs"},
                {name : "Arti",age :20,marks : 90,Course : "Bcs"}
            ];


       for(let i = 0; i < studentInfor.length;i++)
       {
         console.log("student" + (i+ 1) + ": ");
         console.log("Name" + studentInfor[i].name);
         console.log("Age"+ studentInfor[i].age);
         console.log("Course"+ studentInfor[i].Course);
         console.log("-----------------*************---------------");
       }




// Use for...in to print all properties of the object.


let student = {
    name : "Arti",
    age : 20,
    location : "Karad"
};
for(let key in student){
    console.log(key + ": "+student[key]);
}