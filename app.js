var fs=require("fs")

storyAfterFreq=[]
allWords = [[...fs.readFileSync('story.txt').toString().split(" ")] , null]
stopwords = [[...fs.readFileSync('stopwords.txt').toString().split(",")], null]
nonStopWords = [null , ()=>{
    
    storyAfterRemove=[]
    for(let i in allWords[0])
        if(!stopwords[0].includes(allWords[0][i])){
            storyAfterRemove.push(allWords[0][i])
        }
      return  storyAfterRemove 
}]
 freqList=[null, ()=>{
    
    for(let i in storyAfterRemove){
       let findWord = storyAfterFreq.find(object => object.key === storyAfterRemove[i])
        if(findWord){
            findWord.count++
        }else{
            storyAfterFreq.push({key:storyAfterRemove[i],count:1})
        }
    }
    return storyAfterFreq
}]

 sorted=[null , ()=>{
   return storyAfterFreq.sort((a,b) =>  b.count - a.count)
}]
 allColumns = [allWords,stopwords,nonStopWords,freqList,sorted]

const update =()=>{
    for(let i= 0 ;i<allColumns.length;i++)
       {
        if(allColumns[i][1] != null)
            allColumns[i][0] = allColumns[i][1]()
              console.log(allColumns[i])  
        }
    
}
update()

