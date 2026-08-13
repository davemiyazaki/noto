#from sudachipy import dictionary
#dict_obj = dictionary.Dictionary()
#tokenizer_obj = dict_obj.create(fields={"surface","dictionary_form","pos"})
#raw_text ="私はせっかちでごめん、ただ話したいなの"
#listOfSomeSorts = tokenizer_obj.tokenize(raw_text)
#listOfWords = {}
#for m in listOfSomeSorts :

#    wordInstance =[m.surface(), m.dictionary_form(), m.part_of_speech()]
#    print(wordInstance)

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class className(BaseModel):
    var: str



@app.post("/echo", response_model=className)
async def count_words(raw_text:str):
    array_words = raw_text.split()
    return{"var":f"{len(array_words)}"}
