# StackSavings

## Installation

### Step 0: Requirements

[Laravel requirements](https://laravel.com/docs/5.4#server-requirements)

You must install Node JS with NPM (Node Package Manager), Composer and Git. You could check installed versions in console:

	node -v
	npm -v

### Step 1: Cloning the repository

#### Clone in current folder

	git clone https://github.com/stacksavings/Laravel-Modular.git .

This option can be used in [C9](https://c9.io)

#### Clone in custom folder

	git clone https://github.com/stacksavings/Laravel-Modular.git folderName

### Step 3: Installing Composer packages
	
In console, run the follow comand:
	
	# In current folder
	composer install

	# In custom folder
	cd folderName/
	composer install

### Step 4: Compiling assets

In the root folder, run the follow command in console:
	
	npm run dev

For each change in CSS and JS, you must run this command to execute tasks in webpack.mix.js file. Only for SASS CSS, EcmaScript 6 and packages installed with NPM. Also, if you want to compile custom files CSS and JS. More info: [Laravel Mix](https://laravel.com/docs/5.4/mix) 

### Step 5: Setup Database

Copy .env.example file as .env file. Edit it:

	DB_CONNECTION=mysql
	DB_HOST=127.0.0.1
	DB_PORT=3306
	DB_DATABASE=dbName
	DB_USERNAME=mySqlUser
	DB_PASSWORD=secret

	FACEBOOK_ID=FacebookID
	FACEBOOK_SECRET=FacebookKey
	FACEBOOK_URL=/auth/facebook/callback

I will send you these data of Facebook Authentication.

### Step 6: Migrations

Migrations will install Database's tables:

	php artisan migrate

### Step 7: Google Client secret to access Google spreadsheets

Put in root folder the client_secret.json file, which I will send you in an Email. This file is linked in config/spreadsheets.php:

	'client_secret' => '../stacksavings-12345678890.json

### Step 8: Host configuration

You must configure the host virtual of project. Application startup is in /public/index.php.

#### Host configuration [C9](https://c9.io)

	cd /etc/apache2/sites-available
	nano 001-cloud9.conf

Change this line,

	DocumentRoot /home/ubuntu/workspace

New line,

	DocumentRoot /home/ubuntu/workspace/public

#### Local Host configuration

	sudo su
	cd /etc/apache2/sites-available
	cp 000-default.conf /etc/apache2/sites-available/hostname.conf
	gedit hostname.conf 

Host lines,

	<VirtualHost *:80>
	    ServerName www.hostname.dev
	    ServerAlias hostname.dev

	    DocumentRoot /home/username/path/to/project/public
	    ErrorLog /home/username/path/to/logs/errors.log
	    CustomLog /home/username/path/to/logs/access.log combined

	    <Directory /home/username/path/to/project/public/>
	        Options -Indexes +FollowSymLinks +MultiViews 
	        AllowOverride All
		Require all granted
	    </Directory>
	</VirtualHost>

Enable site,

	a2ensite hostname.conf

Restart apache,

	service apache2 restart

Config hosts file,

	gedit /etc/hosts

Add lines,

	127.0.0.1 www.hostname.dev
	127.0.0.1 hostname.dev
	
## Read a spreadsheet

### In Controller

	use App\Stacksavings\Spreadsheet;
    
    $sheet = new Spreadsheet();
    $data = $sheet->read(config('spreadsheets.worksheet'))->get(); 

    # Example 2

    $sheet = new Spreadsheet();
    $data = $sheet->read('worksheetName')->get(); 

### Configuration

File /config/spreadsheets.php

	'name' => 'StackSavings',
	'spreadsheet' => 'SheetsLayout-1',
	'worksheet' => 'livre-lead_testimonial', # Optional
	'client_secret' => '../stacksavings-18347e7f1ecf.json'

