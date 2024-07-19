import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  template: `
    <!--home Section -->
    <section id="home" class="home">
        <div class="overlay">
            <div class="home_skew_border">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 ">
                            <div class="main_home_slider text-center">
                                <div class="single_home_slider">
                                    <div class="main_home wow fadeInUp" data-wow-duration="300ms">
                  <h1 class="bienvenue" id="hi">Bienvenue chez</h1>
                  <img class="img-center img-40" src="assets/images/Logo-01.png" />
                                        <div class="home_btn">
                                            <a href="/pages/our-teas/infuser.php" target="_blank" class="btn btn-lgh m_t_10">BIEN INFUSER SON THÉ</a>
                                            <a href="pages/our-teas/YunnanTea/Puercha/puercha.php" target="_blank" class="btn btn-home">THÉS PU'ER, ÇA VOUS PARLE ?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="scrooldown">
                    <a href="#feature"><i class="fad fa-arrow-down"></i></a>
                </div>
            </div>
        </div>
    </section>
    <!--End of home section -->
  `,
  styles: ``
})
export class WelcomeComponent {

}
