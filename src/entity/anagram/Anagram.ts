//Given two words check if they are anagrams

export default class Anagram{

    public isAnagram(word1 : string, word2 : string ): boolean{
        if (word1.length !== word2.length) return false;       

        const firstWord = word1.split('').sort().join('').toLowerCase();
        const secondWord = word2.split('').sort().join('').toLowerCase();
        
        return firstWord === secondWord;
    }
}