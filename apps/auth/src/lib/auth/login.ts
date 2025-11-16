import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button, FormInput, Slider } from '@office/ui';

@Component({
  selector: 'lib-login',
  imports: [ReactiveFormsModule, Slider],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  fb = inject(FormBuilder);

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  images = [
    'https://png.pngtree.com/thumb_back/fh260/background/20250205/pngtree-soft-pastel-floral-design-light-blue-background-image_16896113.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAF3jvkhiHrC4W-Vu9J_0A1kvni4C5qZrj1w&s',
    'https://thumbs.dreamstime.com/b/incredibly-beautiful-sunset-sun-lake-sunrise-landscape-panorama-nature-sky-amazing-colorful-clouds-fantasy-design-115177001.jpg',
  ];

  submit() {
    console.log(this.form.value);
  }
}
