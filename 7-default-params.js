const greeter = (name = 'user', age) =>{
    console.log('Hello '+ name , 'Age: ' + age)
}

greeter('sachin', 25)
greeter('' ,20)