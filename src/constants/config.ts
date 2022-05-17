export const CONFIG = {
  tries: 8, // This changes how many tries you get to finish the wordle
  language: 'Tiếng Việt', // This changes the display name for your language
  wordLength: 6, // This sets how long each word is based on how many characters (as defined in orthography.ts) are in each word
  author: 'VNCT', // Put your name here so people know who made this Wordle!
  authorWebsite: 'https://twitter.com/Ivesecond', // Put a link to your website or social media here
  wordListSource:
    'Từ điển Tiếng Việt - Gs. Hoàng Phê chủ biên (từ có chữ đầu là a, ă, â, x, y, z, ô, ơ và ư) và tratu.soha.vn (cho các từ còn lại)', // Describe the source material for your words here
  wordListSourceLink:
    'http://www.vienngonnguhoc.gov.vn/bai-viet/tai-ban-tu-dien-tieng-viet_575.aspx', // Put a link to the source material for your words here
  //
  // THESE NEXT SETTINGS ARE FOR ADVANCED USERS
  //
  googleAnalytics: '', // You can use this if you use Google Analytics
  shuffle: true, // whether to shuffle the words in the wordlist each time you load the app (note: you will lose the 'word of the day' functionality if this is true)
  normalization: 'NFC', // whether to apply Unicode normalization to words and orthography - options: 'NFC', 'NFD', 'NKFC', 'NKFD', false
}
