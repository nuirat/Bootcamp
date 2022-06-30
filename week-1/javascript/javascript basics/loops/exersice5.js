const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }
  for(word in dictionary)
  {
      
    console.log('words that begin with '+word)
    for(words of dictionary[word])
    console.log(words)
  }