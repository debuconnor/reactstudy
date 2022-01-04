const fruits = ['🍎', '🍊', '🍌', '🍍']
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
    console.log('데이터추가---------------------------------')
    fruits.push('🍅', '🍑')
    console.log(fruits)
    console.log('앞에서 데이터추가---------------------------------')
    fruits.unshift('🍅', '🍑')
    console.log(fruits)
    console.log('데이터삭제---------------------------------')
    fruits.pop()
    console.log(fruits)
    fruits.pop()
    console.log(fruits)
    console.log('앞에서  데이터삭제---------------------------------')
    fruits.shift()
    console.log(fruits)
    fruits.shift()
    console.log(fruits)
    console.log('indexOf,includes--------------------')
    console.log('indexOf=>', fruits.indexOf('🍌'))
    console.log('indexOf=>', fruits.indexOf('🥝'))
    console.log('includes=>', fruits.includes('🥝'))
    console.log('문자열을 배열로--------------------')
    console.log(`fruits: ${fruits}`)//템플릿 문자열
    {
      let fruits = '🍎,🍊,🍌,🍍';
      result = fruits.split()
      console.log(`split:${result}`)
      result = fruits.split(',', 2)
      console.log(`split:${result}`)

    }
    console.log('배열을 문자열--------------------')
    {
      const fruits = ['apple', 'banana', 'orange']
      let result = fruits.join('=>')
      console.log(`join:${result}`)

    }
    console.log('클래스 생성---------------------------')
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

    console.log('클래스형 컴포넌트 생성=>', students)
    console.log('find 90점 이상인 학생---------')
    {
      let result = students.find(function (student, idx) {
        return student.score >= 80
      }
      )
      console.log(result)

    }
    console.log('filter 90점 이상인 학생---------')
    {

      let result = students.filter(student => { return student.score >= 80 })
      console.log(result)
    }
    console.log('from  배열생성---------')
    {
      const _name='point';
      const name_ary=Array.from(_name);
      console.log(name_ary)


    }
    console.log('데이터 불변성-----------------------------------')
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
    let ary4 = ary1.concat(...ary2)//spread 연산자,전개 연산자
    console.log(ary1, ary2, ary1 == ary4)
    console.log('Spread 연산자-----------------------------------')
    let spread1 = ['1세대', '2세대', '3세대']
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