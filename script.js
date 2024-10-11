// ### 1. Length
// 1. Berilgan massivdagi elementlar sonini toping.
// 2. Berilgan matndagi belgilar sonini aniqlang.
// 3. Bo'sh bo'lmagan massivning oxirgi elementini aniqlash uchun length metodidan foydalaning.

// 1.
// var arr =  ['et','ht','fd','grg','er','fed','bh','ytr']

// for (var b = 0; b <= arr.length; b++){
//     console.log(b);
// }

// 2.

// 3.
// var sum = 0
// var a = [5,5,8,'fd','ds','cdss','ddc','ds']

// for (let b = 0; b <= a.length; b++) {
//     sum = a[a.length - 1]
    
//     console.log(sum)
// }

// ### 2. Concat
// 1. Ikki ta massivni birlashtiring va yangi hosil bo'lgan massivni qaytaring.
// 2. Uchta satrni qo‘shib, bitta matn yaratib oling.
// 3. Ikki massivni birlashtirib, keyin ularga yangi element qo'shib, natijani toping.

// 1.
// var arr = [1,2,3,4,5,6,7,8,7]
// var arr2 = [1,5,7,9,89,89,98,98,5]

// var re = arr.concat(arr2)
// console.log(re)
 
// 2.
// var arr = ['dsadxsads','dsdssaD','eafdsfcfc','ythsrgdtf']
//  var arr2 = ['adskkmes','dejsd','dshgcuewdshb','dsmkddkjmcmjkd']
// var arr3 = ['dcscsdc','sdck,oeshuewjkl','ecswdkclkpvmpv','ewdsazd','sdsewedcdzs','swweec']

//  var re = arr.concat(arr2,arr3)
//  console.log(re)
//  3.

// var array = [5,32,3,54,567,6,54,3,213,23,5,4,65]
// var array2 = ['fds','fsa','d','df','dsf','dsf','d','sa','f','g','g']
// var res = array.concat(array2)
// array.push('re')
// console.log(res)

// ### 3. Includes
// 1. Berilgan massiv ichida qidirilayotgan element borligini aniqlang.
// 2. Matn ichida qidirilayotgan so'zning mavjud yoki mavjud emasligini tekshiring.
// 3. Massiv ichida 10 dan katta son mavjud yoki yo‘qligini aniqlang.



// 4. IndexOf, LastIndexOf
// 1. Massivda berilgan elementning birinchi paydo bo'lish indeksini toping.
// 2. Massivda berilgan elementning oxirgi paydo bo'lish indeksini aniqlang.
// 3. Berilgan matnda "a" harfi birinchi va oxirgi marta qayerda paydo bo‘lishini toping.

// var a = [1, 2, 3, 4, 2, 5]
// var b = 2

// var firstIndex = -1;
// for (var i = 0; i < a.length; i++) {
//   if (a[i] === b) {
//     firstIndex = i
//     break
//   }
// }
// console.log(firstIndex) 

// var lastIndex = -1
// for (var i = a.length - 1; i >= 0; i--) {
//   if (a[i] === b) {
//     lastIndex = i
//     break
//   }
// }
// console.log(lastIndex) 

// var a = "JavaScript"
// var firstA = -1;
// for (var i = 0; i < a.length; i++) {
//   if (a[i] === 'a') {
//     firstA = i
//     break
//   }
// }
// console.log(firstA) 

// var lastA = -1
// for (var i = a.length - 1; i >= 0; i--) {
//   if (a[i] === 'a') {
//     lastA = i
//     break
//   }
// }
// console.log(lastA) 


// 5. Sort
// 1. Massivdagi sonlarni o'sish tartibida joylashtiring.
// 2. Alfavit bo‘yicha massivdagi so'zlarni tartiblang.
// 3. Massivdagi sonlarni kamayish tartibida joylashtiring.

// var a = [5, 3, 8, 1, 2]
// for (var i = 0; i < a.length - 1; i++) {
//   for (var j = 0; j < a.length - 1 - i; j++) {
//     if (a[j] > a[j + 1]) {
//       var temp = a[j]
//       a[j] = a[j + 1]
//       a[j + 1] = temp
//     }
//   }
// }
// console.log(a)

// var a = ["behi", "gilos", "uzum"]
// for (var i = 0; i < a.length - 1; i++) {
//   for (var j = 0; j < a.length - 1 - i; j++) {
//     if (a[j] > a[j + 1]) {
//       var b = a[j]
//       a[j] = a[j + 1]
//       a[j + 1] = b
//     }
//   }
// }
// console.log(a)

// for (var i = 0; i < a.length - 1; i++) {
//   for (var j = 0; j < a.length - 1 - i; j++) {
//     if (a[j] < a[j + 1]) {
//       var b = a[j]
//       a[j] = a[j + 1]
//       a[j + 1] = b
//     }
//   }
// }
// console.log(a)


// 6. Reverse
// 1. Massivni teskari tartibda chiqaring.
// 2. Berilgan matnni harflarini teskari qilib ko‘rsating.
// 3. Sonlar ketma-ketligini teskari tartibda ko‘rsating.

// var a = [1, 2, 3, 4, 5]
// var b = []
// for (var i = a.length - 1; i >= 0; i--) {
//   b[b.length] = a[i];
// }
// console.log(b) 

// var a = "hello"
// var b = ""
// for (var i = a.length - 1; i >= 0 i--) {
//   b += a[i]
// }
// console.log(b) 

// var a = [1, 2, 3, 4, 5]
// var b = []
// for (var i = a.length - 1; i >= 0; i--) {
//   b[b.length] = a[i]
// }
// console.log(b)


// 7. ToString
// 1. Massivni matnga aylantiring.
// 2. Massiv elementlarini vergul bilan ajratilgan matn ko'rinishida qaytaring.
// 3. Sonlar ketma-ketligini matn ko'rinishida birlashtirib qaytaring.

// var a = [1, 2, 3, 4]
// var b = ""
// for (var i = 0; i < a.length; i++) {
//   if (i === a.length - 1) {
//     b += a[i]
//   } else {
//     b += a[i] + ","
//   }
// }
// console.log(b)

// var b = ""
// for (var i = 0; i < a.length; i++) {
//   if (i === a.length - 1) {
//     b += a[i]
//   } else {
//     b += a[i] + ","
//   }
// }
// console.log(b)

// var b = ""
// for (var i = 0; i < a.length; i++) {
//   b += a[i]
// }
// console.log(b) 


// 8. Join
// 1. Massiv elementlarini “-” belgisi bilan birlashtirib chiqaring.
// 2. Massivdagi so‘zlarni bo‘sh joy bilan birlashtirib, satr ko‘rinishida qaytaring.
// 3. Massiv elementlarini “|” belgisi bilan birlashtirib, satr hosil qiling.

// var a = ["a", "b", "c"]
// var b = ""
// for (var i = 0; i < a.length; i++) {
//   if (i === a.length - 1) {
//     b += a[i]
//   } else {
//     b += a[i] + "-"
//   }
// }
// console.log(b)

// var a = ["hello", "world"]
// var b = ""
// for (var i = 0; i < a.length; i++) {
//   if (i === a.length - 1) {
//     b += a[i]
//   } else {
//     b += a[i] + " "
//   }
// }
// console.log(b)

// var a = ["a", "b", "c"]
// var b = ""
// for (var i = 0; i < a.length; i++) {
//   if (i === a.length - 1) {
//     b += a[i]
//   } else {
//     b += a[i] + "|"
//   }
// }
// console.log(b); 


// 9. Push, Shift
// 1. Massiv oxiriga yangi element qo‘shing va natijani ko‘rsating.
// 2. Massivdan birinchi elementni o‘chirib tashlang va natijani ko‘rsating.
// 3. Berilgan massivga oxiriga bir nechta element qo‘shing, va massivdan birinchi elementni olib tashlang.

// var a = [1, 2, 3]
// a[a.length] = 4
// console.log(a)

// for (var i = 0; i < a.length - 1; i++) {
//   a[i] = a[i + 1]
// }
// a.length = a.length - 1
// console.log(a)

// a[a.length] = 5
// a[a.length] = 6
// for (var i = 0; i < a.length - 1; i++) {
//   a[i] = a[i + 1]
// }
// a.length = a.length - 1
// console.log(a)


// 10. Unshift, Pop
// 1. Massivning boshiga yangi element qo‘shing va natijani qaytaring.
// 2. Massivning oxirgi elementini o‘chirib tashlang va natijani qaytaring.
// 3. Birinchi va oxirgi elementni qo‘shish va o‘chirish bilan bog'liq operatsiyalarni bajaring.

// var a = [1, 2, 3];
// for (var i = a.length; i > 0; i--) {
//   a[i] = a[i - 1]
// }
// a[0] = 0
// console.log(a) 

// a.length = a.length - 1
// console.log(a)

// for (var i = a.length; i > 0; i--) {
//   a[i] = a[i - 1]
// }
// a[0] = -1
// a.length = a.length - 1
// console.log(a)


// Qiyinroq masalalar:

// 1. Massiv ichida qidirilayotgan element mavjud bo'lsa, uni olib tashlang, aks holda qo'shing.
// var a = [1, 2, 3, 4]
// var b = 3
// var index = a.indexOf(b)
// if (index !== -1) {
//   a.splice(index, 1)
// } else {
//   a.push(b)
// }
// console.log(a)

// 1. Massiv ichida qidirilayotgan element mavjud bo'lsa, uni olib tashlang, aks holda qo'shing.


// 2. Berilgan massivda ma'lum bir elementning birinchi va oxirgi indeksini toping,
//    va ushbu indekslar orasidagi barcha elementlarni yangi massivga oling.
// var c = [1, 2, 3, 4, 2, 5]
// var d = 2
// var a = -1
// var q = -1

// for (var i = 0; i < c.length; i++) {
//   if (c[i] === d && a === -1) {
//     a = i
//   }
//   if (c[i] === d) {
//     q = i
//   }
// }

// var newArr = [];
// if (a !== -1 && q > a) {
//   for (var i = a + 1; i < q; i++) {
//     newArr[newArr.length] = c[i]
//   }
// }
// console.log(newArr)

// 3. Sonlarni o'sish tartibida, so'zlarni teskari tartibda chiqaring.


// 4. Massivdagi sonlarni ikkiga ko'paytiring va natijada hosil bo'lgan qiymatlarni vergul bilan ajratib ko'rsating.
// var f = [1, 2, 3]
// var a = ""
// for (var i = 0; i < f.length; i++) {
//   if (i > 0) {
//     a += ","
//   }
//   a += f[i] * 2
// }
// console.log(a)

// 5. Uchta massivni birlashtirib, har bir massiv elementini “-“ belgisi bilan ajratib yangi matn hosil qiling.
//    Matndagi barcha kichik harflarni katta harflarga o'zgartiring.


// 6. Massivdagi elementlarning birinchi va oxirgi bo'lganlarini o'chirib,
//    qolgan elementlarni satr sifatida “:” belgisi bilan birlashtirib ko'rsating.
// var j = [1, 2, 3, 4]
// if (j.length > 2) {
//   j = j.slice(1, -1)
//   var r = "";
//   for (var k = 0; k < j.length; k++) {
//     if (k > 0) {
//       r += ":"
//     }
//     r += j[k]
//   }
//   console.log(r)
// } else {
//   console.log("Error")
// }

// 7. Massivning boshiga va oxiriga bittadan yangi element qo'shing,
//    so'ngra massivni tartiblab chiqaring va natijada oxirgi uch elementni oling.
// var k = [2, 3, 4]
// k.unshift(1)
// k.push(5)
// for (var i = 0; i < k.length - 1; i++) {
//   for (var j = 0; j < k.length - 1 - i; j++) {
//     if (k[j] > k[j + 1]) {
//       var q = k[j]
//       k[j] = k[j + 1]
//       k[j + 1] = q
//     }
//   }
// }
// var a = []
// for (var i = k.length - 3; i < k.length; i++) {
//   a[a.length] = k[i]
// }
// console.log(a)

// 8. Massivni teskari qilib chiqing, boshidan 2 ta va oxiridan 3 ta elementni o'chiring,
//    qolgan elementlarni o'sish tartibida joylashtiring.
// var m = [1, 2, 3, 4, 5, 6, 7, 8]
// var reversed = [];
// for (var i = m.length - 1; i >= 0; i--) {
//   reversed[reversed.length] = m[i]
// }
// for (var i = 0; i < 2; i++) {
//   reversed.splice(0, 1)
// }
// for (var i = 0; i < 3; i++) {
//   reversed.pop()
// }
// Qolgan elementlarni o'sish tartibida joylashtirish
// for (var i = 0; i < reversed.length - 1; i++) {
//   for (var j = i + 1; j < reversed.length; j++) {
//     if (reversed[i] > reversed[j]) {
//       var a = reversed[i]
//       reversed[i] = reversed[j]
//       reversed[j] = a
//     }
//   }
// }
// console.log(reversed)

// 9. Massivning boshiga va oxiriga bittadan yangi element qo'shing,
//    so'ngra massivni tartiblab chiqaring va natijada oxirgi uch elementni oling.
// var n = [2, 3, 4]
// n.unshift(1)
// n.push(5)
// for (var i = 0; i < n.length - 1; i++) {
//   for (var j = 0; j < n.length - 1 - i; j++) {
//     if (n[j] > n[j + 1]) {
//       var b = n[j]
//       n[j] = n[j + 1]
//       n[j + 1] = b
//     }
//   }
// }
// var a = []
// for (var i = n.length - 3; i < n.length; i++) {
//   a[a.length] = n[i]
// }
// console.log(a)
