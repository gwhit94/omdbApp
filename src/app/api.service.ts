import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "";
  data: Object;
  constructor(private http: HttpClient) { }
  apiSearch(val){
    return this.http.get(`http://www.omdbapi.com/?apikey=bc1b5902&s=${val}`)
    .pipe(
      map(res => res['Search'])
    )    
  }
}

// var apiKey = "bc1b5902";

// var query;
// var jsonResults;

// searchButton.addEventListener("click", function(){

//     var titleValue = searchBox.value;
//     var typeValue = typeSelect.value;
//     var yearValue = yearBox.value;
//     resultsField.innerHTML = "";

//     if (titleValue.trim().length >= 3 ){
//         console.log(`Title: ${titleValue}`, `Type: ${typeValue}`, `Year: ${yearValue}`); 
//     }  else {
//         console.log("Enter 3 or more characters!");
//         return;
//     };
//     if (typeValue === ""){
//         query = `http://www.omdbapi.com/?apikey=${apiKey}&s=${titleValue}&y=${yearValue}`;
//     } else {
//         query = `http://www.omdbapi.com/?apikey=${apiKey}&s=${titleValue}&type=${typeValue}&y=${yearValue}`;
//     };
//     console.log(query);
//     fetch(query)
//         .then(function(response){
//             console.log(response);
//             if (!response.ok){
//                 console.log(response.status);
//             }
//             return response.json();
//         })
//         .then(function (res){
//             if (res.Response === "False"){
//                 resultsField.innerHTML = `<div class="searchResult"> Error: ${res.Error} </div>`;
//                 return;
//             }
//             jsonResults = res;
//             console.log(res);

//             for(i=0; i < jsonResults.Search.length; i++){
//                 console.log(jsonResults.Search[0].Title);
//                 var poster = "";
//                 if (jsonResults.Search[i].Poster != "N/A"){
//                     poster = `<img src="${jsonResults.Search[i].Poster}" alt="" >`
//                 }
                
//                 resultsField.innerHTML += 
//                     `
//                     <div class="searchResult">
//                     ${poster}
//                     Title: ${jsonResults.Search[i].Title} <br>
//                     Year: ${jsonResults.Search[i].Year} <br>
//                     Type: ${jsonResults.Search[i].Type} <br>
//                     </div>
//                     `
//             };
//             resultsField.innerHTML += `<div class="searchResult totalResults">Total Results: ${jsonResults.totalResults}`;
//         })
//     });