import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  photos = [
    {
      url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb5be90e-aeed-4033-ac44-9864f64c6f45/d5mz34a-ab203586-0ba9-4fda-a68a-eb334fb33e03.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYmI1YmU5MGUtYWVlZC00MDMzLWFjNDQtOTg2NGY2NGM2ZjQ1XC9kNW16MzRhLWFiMjAzNTg2LTBiYTktNGZkYS1hNjhhLWViMzM0ZmIzM2UwMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.M4jFI-_wxZ3GCSHPcBCGdIF9fIvVqTU5LRlwjh0y_rM',
      description: 'Jiraya'
    },
    {
      url: 'https://i.pinimg.com/564x/da/df/e6/dadfe6a919f2fb826cfa57f471cc3424.jpg',
      description: 'Naruto'
    }
  ];
} 
