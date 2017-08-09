/**
 * Created by wangxuquan on 2017/8/9.
 */
function func1 () {


    (function() {
        console.log(222);
    })();
    async function func3() {
        var aaa = await 333;
        console.log(aaa);
    }
    func3();
    (function() {
        console.log(444);
    })();

    async function func5() {
        var aaa = await 555;
        console.log(aaa);
    }
    func5();
    console.log(111);


}

// func1();



function getSomething() {
    return "something";
}

async function testAsync() {
    return Promise.resolve("hello async");
}

async function test() {
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1, v2);
}

// test();

const exts     = ['.mkv', '.avi', '.mp4', '.rm', '.rmvb', '.wmv'];

const a = exts.filter(v =>
   exts.includes(v)
   // v === '.rm'
);

console.log(a);

let as = async()=>{
  return Promise.resolve('hello world');
};

console.log(as());// Promise { hello world }

(async()=>{
    let hello = await as();
    console.log(hello); // hello world
})();


