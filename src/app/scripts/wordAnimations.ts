/*
Tools related to Levenshtein distance, including animating an element's innerText from one word to another

The bones of this code are somewhat old, so probably worth going back and improving.
*/

const BETWEEN_WORD_ANIMATION_DELAY = 50;

// build the Wagner-Fischer matrix for word1 and word2
function getWagnerFischerArray(word1: string, word2: string) {
  const m = word1.length + 1;
  const n = word2.length + 1;
  let cost = 0;
  const WF_Array: any = []; // TODO
  for (let i = 0; i <= m; i++) {
    WF_Array[i] = [];
  }
  for (let i = 0; i < m; i++) {
    WF_Array[i][0] = i;
  }
  for (let j = 0; j < n; j++) {
    WF_Array[0][j] = j;
  }
  for (let j = 1; j < n; j++) {
    for (let i = 1; i < m; i++) {
      cost = word1[i - 1] == word2[j - 1] ? 0 : 1; // if !=, need to sub one letter for another
      WF_Array[i][j] = Math.min(
        WF_Array[i - 1][j] + 1,
        WF_Array[i][j - 1] + 1,
        WF_Array[i - 1][j - 1] + cost
      );
    }
  }
  return WF_Array;
}

// construct the word ladder from word1 to word2 and return it
function getWagnerFischerSequence(word1: string, word2: string) {
  let m = word1.length;
  let n = word2.length;
  const WF_Array = getWagnerFischerArray(word1, word2);
  const words = [];
  let curWord = word1;
  while (m > 0 || n > 0) {
    let del = m > 0 ? WF_Array[m - 1][n] : m + n;
    let ins = n > 0 ? WF_Array[m][n - 1] : m + n;
    let sub = m > 0 && n > 0 ? WF_Array[m - 1][n - 1] : m + n;
    let min = Math.min(del, ins, sub);
    if (min == sub) {
      if (WF_Array[m - 1][n - 1] < WF_Array[m][n]) {
        curWord = curWord.slice(0, m - 1) + word2[n - 1] + curWord.slice(m);
        words.push(curWord);
      }
      m -= 1;
      n -= 1;
    } else if (min == del) {
      curWord = curWord.slice(0, m - 1) + curWord.slice(m);
      m -= 1;
      words.push(curWord);
    } else {
      curWord = curWord.slice(0, m) + word2[n - 1] + curWord.slice(m);
      n -= 1;
      words.push(curWord);
    }
  }
  return words;
}

// given a set of words w1...wn, animate wi to wi+1, wi+1 to wi+2, etc.
// animate here means perform one Levenshtein operation at a time (delete, insert, substitute)
function animateWords(
  el: HTMLElement,
  words: string[],
  delay: number,
  callback: () => void
) {
  let call = callback || (() => {});
  let a = words[0];
  let b = words[1];
  let seq = getWagnerFischerSequence(a, b);
  let index = 0;
  function animate() {
    if (seq[index] != null) {
      el.innerText = seq[index];
      index += 1;
      setTimeout(() => {
        animate();
      }, BETWEEN_WORD_ANIMATION_DELAY);
    } else if (words.length > 2) {
      setTimeout(() => {
        animateWords(el, words.slice(1), delay, call);
      }, delay);
    } else {
      call();
    }
  }
  animate();
}

export function shuffleString(
  element: HTMLElement,
  word: string,
  delay: number,
  callback: () => void
) {
  animateWords(
    element,
    [element.innerText, word, word, word, element.innerText],
    delay,
    callback
  );
}