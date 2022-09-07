import Anagram from "../../src/anagram/1-anagram"

test('should be an anagram', ()=>{
    const anagram = new Anagram();
    const isAnagram = anagram.isAnagram("people", "poeple");
    expect(isAnagram).toBeTruthy();
});

test('should not be an anagram', ()=>{
    const anagram = new Anagram();
    const isAnagram = anagram.isAnagram("main", "nine");
    expect(isAnagram).not.toBeTruthy();
})

test('should not be an anagram if the length is different', ()=>{
    const anagram = new Anagram();
    const isAnagram = anagram.isAnagram("ten", "plastic");
    expect(isAnagram).not.toBeTruthy();
})