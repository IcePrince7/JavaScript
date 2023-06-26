let str1 = "pgolden"
let str2 = "oldk"
let res = ''
let flag = true

for (let i = 0; i <= str1.length; i++) {
    if (flag)
        for (let j = 0; j <= str2.length; j++)
            if (str1.charAt(i) == str2.charAt(j)) {
                res = res + str1.charAt(i)
            } 
            // else flag = false
}
// console.log(res);

if (res == str2) console.log("Its a anagarm");
else console.log("Not a anagram");
