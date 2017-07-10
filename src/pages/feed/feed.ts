import { MoovieProvider } from './../../providers/moovie/moovie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Leonardo Dionizio",
    data: "November 5, 1955",
    descricao: "Este app é daora",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago"
  }

  public nome_usuario: string = 'Leonardo Dionizio';
  public num1: number;
  public num2: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MoovieProvider
  ) {
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2);
  }


  ionViewDidLoad() {
    // this.somaDoisNumeros(10,99);
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        console.log(data);
      }, error =>{
        console.log(error);
      })
  }

}
