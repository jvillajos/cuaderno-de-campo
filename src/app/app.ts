import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header, Footer } from "../core/layout";
import { LoadingIndicator } from "../shared/ui";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, LoadingIndicator],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cuaderno-de-campo');
}
