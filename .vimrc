set nocompatible
" Plugins
call plug#begin('~/.vim/plugged')
Plug 'Lokaltog/vim-powerline'
Plug 'kien/ctrlp.vim'
Plug 'Valloric/YouCompleteMe'
Plug 'ap/vim-css-color'
Plug 'junegunn/goyo.vim'
Plug 'vimwiki/vimwiki'
Plug 'vim-pandoc/vim-pandocPlug' 
Plug 'vim-pandoc/vim-pandoc-syntax' 
call plug#end()
" Automatic reloading of .vimrc
autocmd! bufwritepost .vimrc source %

set nocompatible
filetype plugin on

" Mouse
set mouse=a

" Rebind <Leader> key
let mapleader = ","

" bind Ctrl+<movement> keys to move around the windows
map <c-j> <c-w>j
map <c-k> <c-w>k
map <c-l> <c-w>l
map <c-h> <c-w>h

" move between tabs
map <Leader>n <esc>:tabprevious<CR>
map <Leader>m <esc>:tabnext<CR>

" map sort function to a key
vnoremap <Leader>s :sort<CR>

" Showing line numbers and length
set number  " show line numbers
set tw=79   " width of document (used by gd)
set nowrap  " don't auto wrap on load
set fo-=st  " don't auto wrap text when typing

" Useful settings
set history=700
set undolevels=700
set nowrap

" Real programmers don't use tab but spaces
set tabstop=4
set softtabstop=4
set shiftwidth=4
set shiftround
set expandtab

" Make search case insensitive
set hlsearch
set incsearch
set ignorecase
set smartcase

" Show whitespace
" MUST be inserted BEFORE the colorscheme command
"autocmd ColorScheme * highlight ExtraWhitespace ctermbg=red guibg=red
"au InsertLeave * match ExtraWhitespace /\s\+$/


" Enables yanking and cutting (y/d) to end up in system wide clipboard
set clipboard=unnamedplus

" Color scheme
" mkdir -p ~/.vim/colors && cd ~/.vim/colors
" wget -O wombat256mod.vim http://www.vim.org/scripts/download_script.php?src_id=13400
set t_Co=256
color default
syntax on

" Settings for YouCompleteMe
" let g:ycm_key_invoke_completetion = '<C-Space>'
let g:ycm_autoclose_preview_window_after_completion=1
nnoremap <leader>g :YcmCompleter GoToDefinitionElseDeclaration<CR>

" Settings for CtrlP
noremap <Leader>p :CtrlP<CR>  " Open search
let g:ctrlp_max_height = 30
"set wildignore+=*.pyc

" Settings for powerline
" let g:Powerline_symbols = 'fancy'
set laststatus=2

" Settings for vimwiki
let g:vimwiki_list = [{
                      \ 'auto_export': 1,
                      \ 'path': '~/vimwiki/',
                      \ 'path_html': '~/vimwiki/html/',
                      \ 'template_path': '~/vimwiki/html/',
                      \ 'syntax': 'markdown', 
                      \ 'ext': '.md',
                      \ 'template_default': 'markdown',
                      \ 'template_ext': '.html',
                      \ 'custom_wiki2html': '~/vimwiki/html/wiki2html.sh'}]

nmap <Leader>k <Plug>VimwikiDiaryPrevDay
nmap <Leader>j <Plug>VimwikiDiaryNextDay

 " autocmd FileType vimwiki call SetMarkdownOptions()

 " function! SetMarkdownOptions()
 "   call VimwikiSet('syntax', 'markdown')
 "   call VimwikiSet('custom_wiki2html', 'wiki2html.sh')
 " endfunction
