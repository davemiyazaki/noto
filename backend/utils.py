#dedicated to processing text which is NOT part of server rendering

from sudachipy import Dictionary, SplitMode 

tokenizer = Dictionary().create()


def analyzeText(userInput:str):
    tokenizedText = createReadableTokenizedText(rawText=userInput)
    frequencyAnalysis = calculateWordFrequency(tokenizedText) 

    return {"text":tokenizedText, "frequencyAnalysis":frequencyAnalysis}  #returning dict and list 


def createReadableTokenizedText(rawText:str):
    morphemes = tokenizer.tokenize(rawText, SplitMode.A)

    morpheme_list = []
    for i in range(morphemes.size()):
        morpheme_list.append(morphemes[i].dictionary_form())

    # DEBUG 
    #print(f"LIST OF MORPHEMES IS {morpheme_list} ")

    return morpheme_list;

def calculateWordFrequency(wordList:list[str]):
    #create pure list of counting using uniqness rules of dictionaries
    initialValue: int = 0
    wordDictionary = dict.fromkeys(wordList, initialValue)
    wordDictionaryItems = list(wordDictionary.keys())

    # DEBUG 
    #print(f"LIST OF WORD DICTIONARY KEYS IS {wordDictionaryItems} ")

    for i in range(len(wordDictionaryItems)):
        frequencyCount = wordList.count(wordDictionaryItems[i])
        wordDictionary[wordDictionaryItems[i]] = frequencyCount

    return wordDictionary


def __debug():
   print(analyzeText("李も桃も桃のうち")) 


#__debug()