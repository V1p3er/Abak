from django.shortcuts import render, redirect
from django.contrib.auth import get_user_model, authenticate, login
from django import forms
from django.contrib import messages


class SignUpForm(forms.Form):
    email = forms.EmailField()
    password = forms.CharField(widget=forms.PasswordInput)

def signup(request):
    User = get_user_model()

    if request.method == 'POST':
        form = SignUpForm(request.POST)

        if form.is_valid():
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']

            user = User.objects.create_user(email, email, password)

            return redirect('login')

        else:
            return render(request, 'authentications/sign-up/sign-up.html', {'form': form})

    else:
        # Display the sign-up form
        form = SignUpForm()
        return render(request, 'authentications/sign-up/sign-up.html', {'form': form})
def login_view(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']

        try:
            user = get_user_model().objects.get(email=email)
            if user.check_password(password):
                login(request, user)
                messages.success(request, 'You have been logged in successfully!')
                return redirect('homepage')

            else:
                return render(request, 'authentications/login/login.html', {'error': 'Invalid email or password'})
        except get_user_model().DoesNotExist:
            return render(request, 'authentications/login/login.html', {'error': 'Invalid email or password'})

    else:
        return render(request, 'authentications/login/login.html')