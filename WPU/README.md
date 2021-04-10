# 1.1 - Object

Membuat object pada js

- Object Literal
- Function Declaration
- Constructor Function (keyword new)
- Object.create()

# 1.2 - Object.create()

# 1.3 - Prototype

---

# 2.1 - Execution Context, Hoisting, Scope

# 2.2 - Closure

- Lexical Scope

---

# 3.1 - Arrow Function

- script2.js

# 3.2 - Arrow Function (lanjutan)

- script3.js
- `this`
- Object Literal dan Function Declaration pakai Arrow Function cari ke global window
- Constructor Function pakai Arrow Function cari di Lexical Scope/function parent/induk

---

# 4.1 - Higher Order Function

- Function yang beroperasi pada function yang lain.
- Baik itu digunakan dalam argument, maupun sebagai return value
- Membuat Program semakin simple, efisien
- Contoh Higher Order Function

```
array.prototype.map()
array.prototype.filter()
array.prototype.reduce()
```

# 4.2 - Filter, Map, Reduce

- script5.js

# 4.3 - Latihan Filter, Map, Reduce

- folder latihan `filter map reduce`

---

# 5.1 - Template Literal

- atau di sebut Template String
- Template literal = string literal beda expresi di dalamnya

```
let kutipSatu = ''
let kutipDua = ""
let backTick = ``
```

- Hanya bisa menggunakan backtick (`)
- Multi-line String - enter
- HTML Fragment - tag html
- Embedded Exprression - ${}
- Expression Interpolation - operasi matematika

# 5.2 - Latihan Template Literal

# 5.3 - Tagged Template

- Bentuk yang lebih komplek, sebuah function
- Penggunaan:
- 1. Escaping HTML Tags / Sanitize
- 2. Translation & Internationalizarion
- 3. Styled Components
- folder latihan `tagged template`

---

# 6.1 - Destructuring Variable

- script6.js
- atau Destructuring Assignment
- Expression yang dapat membongkar nilai dari Array/object dalam variabel yang terpisah

# 6.2 - Destructuring ( function )

- script7.js

---

# 7.0 - Looping Baru pada Javascript

- script8.js

```
for..of
for..in
```

- for of > Iterable Object

1. String
2. Array
3. Arguments / NodeList
4. TypedArray
5. Map
6. Set
7. User-defined Iterables

- for in > Enumerable Object

1. Object

---

# 8.0 - Spread Operator vs. Rest Parameter

- `...`

# 8.1 - Spread Operator

- script9.js
- Memecah (expand / unpack) iterable menjadi single element

# 8.2 - Rest Parameter

- script10.js
- Mempresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array

---

# 9.0 - Asynchronous Javascript

1. Callback
2. Promise
3. ajax
4. Async & Await

---

# 10.0 - Callbacks

# 10.1 - Callbacks (latihan)

- folder `latihan callback`

# 11.0 - Promise

- Object yang mempresentasikan keberhasialan / kegagalan sebuah event yang async di masa yang akan datang
- janji (terpenuhi / ingkar)
- states (fulfilled / rejected / pending)
- callbak (resolve / reject / finally)
- aksi (then / catch)
- .
- ajax > jquery
- vanilla javascript
- fetch()

---

# 12.0 - fetch

---

---

# Javascript

- single-threaded
  > Thread = Urutan eksekusi kode yang dapat dilakukan secara bebas / independent satu sama lain
- non-blocking
- asynchronous
- concurrent language
  > Asynchronous + single-threaded = Concurrency
  > Asynchronous + multi-threades = Parallelism
- Kesimpulan

1. Single vs Multi Thread > Lingkungan ekseskusi task
2. Blocking vs Non-blocking > Teknik ngoding (Input Output related)
3. Synchronous vs Asynchronous > Teknik ngoding (HTTP Request related)
4. Concurrent vs Parallel > Lingkungan eksekusi task

- Javascript > V8 Engine

1. Heap > Memory Allocation
2. Stack > Function Call & Execution Context

- Heap - Stack > Web API ( Asynchronous Callbacks ) > Callback Queue > Event Loop
