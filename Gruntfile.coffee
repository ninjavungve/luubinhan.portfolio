module.exports = (grunt) ->
  grunt.initConfig
    serverConf: grunt.file.readJSON("server.json")
    partialPath: 'src/partials/'
    watch:
      options:
        livereload: true
      html:
        files: ['src/**/*.html']
        tasks: ['htmlbuild:main']
      css:
        files: ['scss/*.scss']
        tasks: ['sass']
      scripts:
        files: ['docs/*.js']     
        tasks: ['htmlbuild:main']  
    htmlbuild:
      options:            
        sections:
          component: 
            meta: '<%= partialPath %>component/post_meta.html'
            primary_menu: '<%= partialPath %>component/primary_menu.html'
            common_header: '<%= partialPath %>component/common_header.html'
          widget: 
            wp_menu: '<%= partialPath %>widget/wp_menu.html'
            mystyle_contact: '<%= partialPath %>widget/mystyle_contact.html'
            mystyle_social: '<%= partialPath %>widget/mystyle_social.html'
            mystyle_blog: '<%= partialPath %>widget/mystyle_blog.html'
            mystyle_subscribe: '<%= partialPath %>widget/mystyle_subscribe.html'
          layout:
            header: '<%= partialPath %>layout/header.html'
            footer: '<%= partialPath %>layout/footer.html'
        data:
          version: '<%= grunt.template.today("yyyymmddHH") %>'
        relative: true
        beautify: true
      main:
        dest: 'docs/'
        src: ['**/*.html','!partials/*.html']
        expand: true
        cwd: 'src'
    clean:
      build: ['docs/*.html','!css/**','!js/**']    
      options:
        force: true
    copy:
      build:
        dest: 'docs/'
        src: ['**', '!data.json']
        expand: true
        cwd: 'docs/'        
    connect:
      server:
        options:
          base: 'docs'
          hostname: '<%= serverConf.hostname %>'
          port: '<%= serverConf.port %>'
          livereload: true
    sass:
      options:
        sourceMap: true
      dist:
        files:          
          'docs/css/main.css': 'scss/main.scss'
          'docs/editor-style.css': 'scss/editor-style.scss'
          'docs/css/style-responsive.css': 'scss/style-responsive.scss' 
  require('load-grunt-tasks')(grunt)  
  grunt.loadNpmTasks('grunt-sass')
  grunt.registerTask 'default', ['connect', 'watch','sass']
  grunt.registerTask 'build', ['clean:build', 'copy:build', 'sass']
