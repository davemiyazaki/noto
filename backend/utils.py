#dedicated to processing text which is NOT part of server rendering

from sudachipy import Dictionary, SplitMode 

tokenizer = Dictionary().create()


def analyzeText(userInput:str):
    wordsList = createReadableTokenizedText(rawText=userInput)
    resultDict = calculateWordFrequency(wordsList) 

    return resultDict   


def createReadableTokenizedText(rawText:str):
    morphemes = tokenizer.tokenize(rawText, SplitMode.A)

    morpheme_list = list(morphemes)

    return morpheme_list;

def calculateWordFrequency(wordList:list[str]):
    #create pure list of counting using uniqness rules of dictionaries
    initialValue: int = 0
    wordDictionary = dict.fromkeys(wordList, initialValue)
    wordDictionaryItems = wordDictionary.keys() 

    for i in range(len(wordDictionaryItems)):
        frequencyCount = wordList.count(wordDictionaryItems[i])
        wordDictionary[wordDictionaryItems[i]] = frequencyCount

    return wordDictionary


def __debug(text:str):
   print(analyzeText) 

__debug()