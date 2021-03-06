const fruits = ['π', 'π', 'π', 'π']
    console.log(fruits)
    console.log(fruits.length)
    console.log(fruits[2])
    console.log('For------------------------')
    for (let i = 0; i < fruits.length; i++) {
      console.log('For:' + i + fruits[i])
    }
    console.log('For of------------------------')
    for (let i of fruits) {
      console.log('For of' + i)
    }
    console.log('For Each------------------------')
    fruits.forEach(function (i, idx) {
      console.log('For Each' + idx + ':' + i)
    })
    console.log('λ°μ΄ν°μΆκ°---------------------------------')
    fruits.push('π', 'π')
    console.log(fruits)
    console.log('μμμ λ°μ΄ν°μΆκ°---------------------------------')
    fruits.unshift('π', 'π')
    console.log(fruits)
    console.log('λ°μ΄ν°μ­μ ---------------------------------')
    fruits.pop()
    console.log(fruits)
    fruits.pop()
    console.log(fruits)
    console.log('μμμ  λ°μ΄ν°μ­μ ---------------------------------')
    fruits.shift()
    console.log(fruits)
    fruits.shift()
    console.log(fruits)
    console.log('indexOf,includes--------------------')
    console.log('indexOf=>', fruits.indexOf('π'))
    console.log('indexOf=>', fruits.indexOf('π₯'))
    console.log('includes=>', fruits.includes('π₯'))
    console.log('λ¬Έμμ΄μ λ°°μ΄λ‘--------------------')
    console.log(`fruits: ${fruits}`)//ννλ¦Ώ λ¬Έμμ΄
    {
      let fruits = 'π,π,π,π';
      result = fruits.split()
      console.log(`split:${result}`)
      result = fruits.split(',', 2)
      console.log(`split:${result}`)

    }
    console.log('λ°°μ΄μ λ¬Έμμ΄--------------------')
    {
      const fruits = ['apple', 'banana', 'orange']
      let result = fruits.join('=>')
      console.log(`join:${result}`)

    }
    console.log('ν΄λμ€ μμ±---------------------------')
    class Student {
      constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
      }
    }
    const students = [
      new Student('A', 29, true, 45),
      new Student('B', 27, false, 80),
      new Student('C', 30, true, 90),
      new Student('D', 40, false, 60),
      new Student('E', 18, true, 88),
    ]

    console.log('ν΄λμ€ν μ»΄ν¬λνΈ μμ±=>', students)
    console.log('find 90μ  μ΄μμΈ νμ---------')
    {
      let result = students.find(function (student, idx) {
        return student.score >= 80
      }
      )
      console.log(result)

    }
    console.log('filter 90μ  μ΄μμΈ νμ---------')
    {

      let result = students.filter(student => { return student.score >= 80 })
      console.log(result)
    }
    console.log('from  λ°°μ΄μμ±---------')
    {
      const _name='point';
      const name_ary=Array.from(_name);
      console.log(name_ary)


    }
    console.log('λ°μ΄ν° λΆλ³μ±-----------------------------------')
    console.log('Primitive Type')
    let a1 = 1;
    let a2 = 1;

    console.log(a1, a2, a1 == a2)
    console.log('Mutability Type')
    let ary1 = [1, 2, 3]
    let ary2 = [1, 2, 3]
    console.log(ary1, ary2, ary1 == ary2)
    let ary3 = ary1
    ary3.push(4)
    console.log(ary1, ary3, ary1 == ary3)
    let ary4 = ary1.concat(...ary2)//spread μ°μ°μ,μ κ° μ°μ°μ
    console.log(ary1, ary2, ary1 == ary4)
    console.log('Spread μ°μ°μ-----------------------------------')
    let spread1 = ['1μΈλ', '2μΈλ', '3μΈλ']
    console.log('...=>', ...spread1)
    console.log('[]=>', ...[spread1])
    console.log('{}=>', { ...spread1 })
    console.log([...ary1, 4, 5, 6])

    const obj1 = { x: 1, y: 2 }
    const obj2 = { x: 1, y: 2 }
    const obj3 = { z: 3 }
    console.log(obj1, obj2, obj1 == obj2)
    console.log(Object.assign(obj1, obj3))
    const obj4 = { ...obj1, w: 4 }
    console.log('obj4', obj4)