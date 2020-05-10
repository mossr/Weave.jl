var documenterSearchIndex = {"docs":
[{"location":"chunk_options/#Chunk-options-1","page":"Chunk options","title":"Chunk options","text":"","category":"section"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"I've mostly followed Knitr's naming for chunk options, but not all options are implemented.","category":"page"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"Options are separated using \";\" and need to be valid Julia expressions. Example: markdown code chunk that saves and displays a 12 cm wide image and hides the source code:","category":"page"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"julia; out_width=\"12cm\"; echo=false","category":"page"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"Weave currently supports the following chunk options with the following defaults:","category":"page"},{"location":"chunk_options/#Options-for-code-1","page":"Chunk options","title":"Options for code","text":"","category":"section"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"echo = true: Echo the code in the output document. If false the source code will be hidden.\nresults = \"markup\": The output format of the printed results. \"markup\" for literal block, \"hidden\" for hidden results, or anything else for raw output (I tend to use \"tex\" for Latex and \"rst\" for rest). Raw output is useful if you want to e.g. create tables from code chunks.\neval = true: Evaluate the code chunk. If false the chunk won’t be executed.\nterm = false: If true the output emulates a REPL session. Otherwise only stdout and figures will be included in output.\nlabel = nothing: Chunk label, will be used for figure labels in Latex as fig:label.\nwrap = true: Wrap long lines from output.\nline_width = 75: Line width for wrapped lines.\ncache = false: Cache results, depending on cache parameter on weave function.\nhold = false: Hold all results until the end of the chunk.\ntangle = true: Set tangle to false to exclude chunk from tangled code.","category":"page"},{"location":"chunk_options/#Options-for-figures-1","page":"Chunk options","title":"Options for figures","text":"","category":"section"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"fig_width = 6: Figure width passed to plotting library.\nfig_height = 4: Figure height passed to plotting library.\nout_width: Width of saved figure in output markup e.g. \"50%\", \"12cm\", 0.5\\linewidth\nout_height: Height of saved figure in output markup\ndpi = 96: Resolution of saved figures.\nfig_cap: Figure caption.\nlabel: Chunk label, will be used for figure labels in Latex as fig:label\nfig_ext: File extension (format) of saved figures.\nfig_pos = \"!h\": Figure position in Latex, e.g.: \"ht\".\nfig_env = \"figure\": Figure environment in Latex.","category":"page"},{"location":"chunk_options/#Set-default-chunk-options-1","page":"Chunk options","title":"Set default chunk options","text":"","category":"section"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"You can set the default chunk options (and weave arguments) for a document using the YAML header options field. E.g. to set the default out_width of all figures you can use:","category":"page"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"---\noptions:\n      out_width : 50%\n---","category":"page"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"You can also set or change the default chunk options for a document either before weave using the set_chunk_defaults function.","category":"page"},{"location":"chunk_options/#","page":"Chunk options","title":"Chunk options","text":"set_chunk_defaults\nget_chunk_defaults\nrestore_chunk_defaults","category":"page"},{"location":"chunk_options/#Weave.set_chunk_defaults","page":"Chunk options","title":"Weave.set_chunk_defaults","text":"set_chunk_defaults(opts::Dict{Symbol, Any})\n\nSet default options for code chunks, use get_chunk_defaults to see the current values.\n\nE.g.: set default dpi to 200 and fig_width to 8\n\njulia> set_chunk_defaults(Dict{Symbol, Any}(:dpi => 200, fig_width => 8))\n\n\n\n\n\n","category":"function"},{"location":"chunk_options/#Weave.get_chunk_defaults","page":"Chunk options","title":"Weave.get_chunk_defaults","text":"get_chunk_defaults()\n\nGet default options used for code chunks.\n\n\n\n\n\n","category":"function"},{"location":"chunk_options/#Weave.restore_chunk_defaults","page":"Chunk options","title":"Weave.restore_chunk_defaults","text":"restore_chunk_defaults()\n\nRestore Weave.jl default chunk options.\n\n\n\n\n\n","category":"function"},{"location":"publish/#Publishing-to-HTML-and-PDF-1","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"","category":"section"},{"location":"publish/#","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"You can also publish any supported input format to HTML and PDF documents.","category":"page"},{"location":"publish/#","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"note: Note\nProducing PDF output requires that you have XeLaTex installed and in your path.","category":"page"},{"location":"publish/#","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"You can use a YAML header in the beginning of the input document delimited with --- to set the document title, author and date, e.g.:","category":"page"},{"location":"publish/#","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"---\ntitle : Weave example\nauthor : Matti Pastell\ndate: 15th December 2016\n---","category":"page"},{"location":"publish/#","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"Here are sample input and outputs:","category":"page"},{"location":"publish/#","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"input (Julia markdown format): FIR_design_plots.jl\nHTML output: FIR_design_plots.html\nPDF output: FIR_design_plots.pdf","category":"page"},{"location":"publish/#","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"They are generated as follows:","category":"page"},{"location":"publish/#","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"weave(joinpath(dirname(pathof(Weave)), \"../examples\", \"FIR_design_plots.jl\")) # default to md2html output format\nweave(joinpath(dirname(pathof(Weave)), \"../examples\", \"FIR_design_plots.jl\"), doctype = \"md2pdf\")","category":"page"},{"location":"publish/#","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"note: Note\n\"md2html\" and \"md2pdf\" assume Julia markdown format as an input, while pandoc2pdf and pandoc2html assume Noweb input format (i.e. Pandoc markdown).","category":"page"},{"location":"publish/#Templates-1","page":"Publishing to HTML and PDF","title":"Templates","text":"","category":"section"},{"location":"publish/#","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"You can use a custom template with md2html and md2pdf formats with template keyword option, e.g.: weave(\"FIR_design_plots.jl\", template = \"custom.tpl\".","category":"page"},{"location":"publish/#","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"As starting point, you can use the existing templates:","category":"page"},{"location":"publish/#","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"HTML (md2html): julia_html.tpl\nLaTex (md2pdf): julia_tex.tpl","category":"page"},{"location":"publish/#","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"Templates are rendered using Mustache.jl.","category":"page"},{"location":"publish/#Supported-Markdown-syntax-1","page":"Publishing to HTML and PDF","title":"Supported Markdown syntax","text":"","category":"section"},{"location":"publish/#","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"The markdown variant used by Weave is Julia markdown. In addition Weave supports few additional Markdown features:","category":"page"},{"location":"publish/#Comments-1","page":"Publishing to HTML and PDF","title":"Comments","text":"","category":"section"},{"location":"publish/#","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"You can add comments using html syntax: <!-- -->","category":"page"},{"location":"publish/#Multiline-equations-1","page":"Publishing to HTML and PDF","title":"Multiline equations","text":"","category":"section"},{"location":"publish/#","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"You can add multiline equations using:","category":"page"},{"location":"publish/#","page":"Publishing to HTML and PDF","title":"Publishing to HTML and PDF","text":"$$\nx^2 = x*x\n$$","category":"page"},{"location":"usage/#Using-Weave-1","page":"Using Weave","title":"Using Weave","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"You can write your documentation and code in input document using Markdown, Noweb or script syntax and use weave function to execute to document to capture results and figures.","category":"page"},{"location":"usage/#Weave-1","page":"Using Weave","title":"Weave","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"Weave document with markup and julia code using Plots.jl for plots, out_path = :pwd makes the results appear in the current working directory.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"A prepared example","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"# First add depencies for the example\nusing Pkg; Pkg.add.([\"Plots\", \"DSP\"])\nusing Weave\nweave(joinpath(dirname(pathof(Weave)), \"../examples\", \"FIR_design.jmd\"), out_path=:pwd)","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"weave","category":"page"},{"location":"usage/#Weave.weave","page":"Using Weave","title":"Weave.weave","text":"weave(source::AbstractString; kwargs...)\n\nWeave an input document to output file.\n\nKeyword options\n\ndoctype::Union{Nothing,AbstractString} = nothing: Output document format. By default (i.e. given nothing), Weave will set it automatically based on file extension. You can also manually specify it; see list_out_formats() for the supported formats\ninformat::Union{Nothing,AbstractString} = nothing: Input document format. By default (i.e. given nothing), Weave will set it automatically based on file extension. You can also specify either of \"script\", \"markdown\", \"notebook\", or \"noweb\"\nout_path::Union{Symbol,AbstractString} = :doc: Path where the output is generated can be either of:\n:doc: Path of the source document (default)\n:pwd: Julia working directory\n\"somepath\": String of output directory e.g. \"~/outdir\", or of filename e.g. \"~/outdir/outfile.tex\"\nargs::Dict = Dict(): Arguments to be passed to the weaved document; will be available as WEAVE_ARGS in the document\nmod::Union{Module,Nothing} = nothing: Module where Weave evals code. You can pass a Module object, otherwise create an new sandbox module.\nfig_path::AbstractString = \"figures\": Where figures will be generated, relative to out_path\nfig_ext::Union{Nothing,AbstractString} = nothing: Extension for saved figures e.g. \".pdf\", \".png\". Default setting depends on doctype\ncache_path::AbstractString = \"cache\": Where of cached output will be saved\ncache::Symbol = :off: Controls caching of code:\n:off means no caching (default)\n:all caches everything\n:user caches based on chunk options\n:refresh runs all code chunks and save new cache\nthrow_errors::Bool = false: If false errors are included in output document and the whole document is executed. If true errors are thrown when they occur\ntemplate::Union{Nothing,AbstractString,Mustache.MustacheTokens} = nothing: Template (file path) or Mustache.MustacheTokenss for md2html or md2tex formats\nhighlight_theme::Union{Nothing,Type{<:Highlights.AbstractTheme}} = nothing: Theme used for syntax highlighting (defaults to Highlights.Themes.DefaultTheme)\ncss::Union{Nothing,AbstractString} = nothing: Path of a CSS file used for md2html format\npandoc_options::Vector{<:AbstractString} = String[]: Strings of options to pass to pandoc for pandoc2html and pandoc2pdf formats, e.g. [\"--toc\", \"-N\"]\nlatex_cmd::AbstractString = \"xelatex\": The command used to make PDF file from .tex\nlatex_keep_unicode::Bool = false: If true, do not convert unicode characters to their respective latex representation. This is especially useful if a font and tex-engine with support for unicode characters are used\n\nnote: Note\nRun Weave from terminal and try to avoid weaving from IJulia or ESS; they tend to mess with capturing output.\n\n\n\n\n\n","category":"function"},{"location":"usage/#Tangle-1","page":"Using Weave","title":"Tangle","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"Tangling extracts the code from document:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"tangle","category":"page"},{"location":"usage/#Weave.tangle","page":"Using Weave","title":"Weave.tangle","text":"tangle(source::AbstractString; kwargs...)\n\nTangle source code from input document to .jl file.\n\nKeyword options\n\ninformat::Union{Nothing,AbstractString} = nothing: Input document format. By default (i.e. given nothing), Weave will set it automatically based on file extension. You can also specify either of \"script\", \"markdown\", \"notebook\", or \"noweb\"\nout_path::Union{Symbol,AbstractString} = :doc: Path where the output is generated can be either of:\n:doc: Path of the source document (default)\n:pwd: Julia working directory\n\"somepath\": String of output directory e.g. \"~/outdir\", or of filename e.g. \"~/outdir/outfile.tex\"\n\n\n\n\n\n","category":"function"},{"location":"usage/#Supported-output-formats-1","page":"Using Weave","title":"Supported output formats","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"Weave automatically detects the output format based on the file extension. The auto output format detection is handled by detect_doctype(path::AbstractString):","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"function detect_doctype(path::AbstractString)\n    _, ext = lowercase.(splitext(path))\n\n    match(r\"^\\.(jl|.?md|ipynb)\", ext) !== nothing && return \"md2html\"\n    ext == \".rst\" && return \"rst\"\n    ext == \".tex\" && return \"texminted\"\n    ext == \".txt\"  && return \"asciidoc\"\n\n    return \"pandoc\"\nend","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"You can also manually specify it using the doctype keyword option. You can get a list of supported output formats:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"list_out_formats","category":"page"},{"location":"usage/#Weave.list_out_formats","page":"Using Weave","title":"Weave.list_out_formats","text":"list_out_formats()\n\nList supported output formats\n\n\n\n\n\n","category":"function"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"using Weave # hide\nlist_out_formats()","category":"page"},{"location":"usage/#Document-syntax-1","page":"Using Weave","title":"Document syntax","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"Weave uses markdown, Noweb or script syntax for defining the code chunks and documentation chunks. You can also weave Jupyter notebooks. The format is detected based on the file extension, but you can also set it manually using the informat parameter.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"The rules for autodetection are:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"ext == \".jl\" && return \"script\"\next == \".jmd\" && return \"markdown\"\next == \".ipynb\" && return \"notebook\"\nreturn \"noweb\"","category":"page"},{"location":"usage/#Documentation-chunks-1","page":"Using Weave","title":"Documentation chunks","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"In Markdown and Noweb input formats documentation chunks are the parts that aren't inside code delimiters. Documentation chunks can be written with several different markup languages.","category":"page"},{"location":"usage/#Code-chunks-1","page":"Using Weave","title":"Code chunks","text":"","category":"section"},{"location":"usage/#Markdown-format-1","page":"Using Weave","title":"Markdown format","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"Markdown code chunks are defined using fenced code blocks with options following on the same line. e.g. to hide code from output you can use:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":" ```julia; echo=false","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"Sample document","category":"page"},{"location":"usage/#Inline-code-1","page":"Using Weave","title":"Inline code","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"You can also add inline code to your documents using","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"`j juliacode`","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"or","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"! juliacode","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"syntax. Using the j code syntax you can insert code anywhere in a line and with the ! syntax the whole line after ! will be executed. The code will be replaced with captured output in the weaved document.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"If the code produces figures the filename or base64 encoded string will be added to output e.g. to include a Plots figure in markdown you can use:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"![A plot](`j plot(1:10)`)","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"or to produce any html output:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"! display(\"text/html\", \"Header from julia\");","category":"page"},{"location":"usage/#Noweb-format-1","page":"Using Weave","title":"Noweb format","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"Code chunks start with a line marked with <<>>= or <<options>>= and end with line marked with @. The code between the start and end markers is executed and the output is captured to the output document. See chunk options.","category":"page"},{"location":"usage/#Script-format-1","page":"Using Weave","title":"Script format","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"Weave also support script input format with a markup in comments. These scripts can be executed normally using Julia or published with Weave.  Documentation is in lines starting with #', #%% or # %%, and code is executed and results are included in the weaved document.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"All lines that are not documentation are treated as code. You can set chunk options using lines starting with #+ just before code e.g. #+ term=true.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"The format is identical to Pweave and the concept is similar to publishing documents with MATLAB or using Knitr's spin. Weave will remove the first empty space from each line of documentation.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"See sample document:","category":"page"},{"location":"usage/#Setting-document-options-in-header-1","page":"Using Weave","title":"Setting document options in header","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"You can use a YAML header in the beginning of the input document delimited with \"–-\" to set the document title, author and date e.g. and default document options. Each of Weave command line arguments and chunk options can be set in header using options field. Below is an example that sets document out_path and doctype using the header.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"---\ntitle : Weave example\nauthor : Matti Pastell\ndate: 15th December 2016\noptions:\n  out_path : reports/example.md\n  doctype :  github\n---","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"You can also set format specific options. Here is how to set different out_path for md2html and md2pdf and set fig_ext for both:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"---\noptions:\n    md2html:\n        out_path : html\n    md2pdf:\n        out_path : pdf\n    fig_ext : .png\n---","category":"page"},{"location":"usage/#Passing-arguments-to-documents-1","page":"Using Weave","title":"Passing arguments to documents","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"You can pass arguments as Dict to the weaved document using the args argument to weave. The arguments will be available as WEAVE_ARGS variable in the document.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"This makes it possible to create the same report easily for e.g. different date ranges of input data from a database or from files with similar format giving the filename as input.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"In order to pass a filename to a document you need call weave using:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"weave(\"mydoc.jmd\", args = Dict(\"filename\" => \"somedata.h5\"))","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"and you can access the filename from document as follows:","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":" ```julia\n print(WEAVE_ARGS[\"filename\"])\n ```","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"You can use the out_path argument to control the name of the output document.","category":"page"},{"location":"usage/#Include-Weave-document-in-Julia-1","page":"Using Weave","title":"Include Weave document in Julia","text":"","category":"section"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"You can call include_weave on a Weave document to run the contents of all code chunks in Julia.","category":"page"},{"location":"usage/#","page":"Using Weave","title":"Using Weave","text":"include_weave","category":"page"},{"location":"usage/#Weave.include_weave","page":"Using Weave","title":"Weave.include_weave","text":"include_weave(source::AbstractString, informat::Union{Nothing,AbstractString} = nothing)\ninclude_weave(m::Module, source::AbstractString, informat::Union{Nothing,AbstractString} = nothing)\n\nInclude code from Weave document calling include_string on all code from doc. Code is run in the path of the include document.\n\n\n\n\n\n","category":"function"},{"location":"getting_started/#Getting-started-1","page":"Getting started","title":"Getting started","text":"","category":"section"},{"location":"getting_started/#","page":"Getting started","title":"Getting started","text":"The best way to get started using Weave.jl is to look at the example input and output documents. Examples for different formats are included in the packages examples directory.","category":"page"},{"location":"getting_started/#","page":"Getting started","title":"Getting started","text":"First have a look at source document using markdown code chunks and Plots.jl for figures: FIR_design.jmd and then see the output in different formats:","category":"page"},{"location":"getting_started/#","page":"Getting started","title":"Getting started","text":"HTML: FIR_design.html\nPDF: FIR_design.pdf\nPandoc markdown: FIR_design.txt","category":"page"},{"location":"getting_started/#","page":"Getting started","title":"Getting started","text":"note: Note\nProducing PDF output requires that you have XeLateX installed.","category":"page"},{"location":"getting_started/#","page":"Getting started","title":"Getting started","text":"Add dependencies for the example if needed:","category":"page"},{"location":"getting_started/#","page":"Getting started","title":"Getting started","text":"using Pkg; Pkg.add.([\"Plots\", \"DSP\"])","category":"page"},{"location":"getting_started/#","page":"Getting started","title":"Getting started","text":"Weave the files to your working directory:","category":"page"},{"location":"getting_started/#","page":"Getting started","title":"Getting started","text":"using Weave\n\n# Julia markdown to HTML\nweave(\n  joinpath(dirname(pathof(Weave)), \"../examples\", \"FIR_design.jmd\");\n  doctype = \"md2html\",\n  out_path = :pwd\n)\n\n# Julia markdown to PDF\nweave(\n  joinpath(dirname(pathof(Weave)), \"../examples\", \"FIR_design.jmd\");\n  doctype = \"md2pdf\",\n  out_path = :pwd\n)\n\n# Julia markdown to Pandoc markdown\nweave(\n  joinpath(dirname(pathof(Weave)), \"../examples\", \"FIR_design.jmd\");\n  doctype = \"pandoc\",\n  out_path = :pwd\n)","category":"page"},{"location":"notebooks/#Working-with-Jupyter-notebooks-1","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"","category":"section"},{"location":"notebooks/#Weaving-from-Jupyter-notebooks-1","page":"Working with Jupyter notebooks","title":"Weaving from Jupyter notebooks","text":"","category":"section"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"Weave supports using Jupyter Notebooks as input format. This means you can weave notebooks to any supported formats; by default, it will be weaved to HTML.","category":"page"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"weave(\"notebook.ipynb\") # will be weaved to HTML","category":"page"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"warning: Warning\nYou can't use chunk options with notebooks.","category":"page"},{"location":"notebooks/#Output-to-Jupyter-notebooks-1","page":"Working with Jupyter notebooks","title":"Output to Jupyter notebooks","text":"","category":"section"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"As of Weave 0.5.1. there is new notebook method to convert Weave documents to Jupyter notebooks using nbconvert.","category":"page"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"notebook","category":"page"},{"location":"notebooks/#Weave.notebook","page":"Working with Jupyter notebooks","title":"Weave.notebook","text":"notebook(source::AbstractString; kwargs...)\n\nConvert Weave document source to Jupyter Notebook and execute the code using nbconvert. Ignores all chunk options.\n\nKeyword options\n\nout_path::Union{Symbol,AbstractString} = :pwd: Path where the output is generated can be either of:\n:doc: Path of the source document\n:pwd: Julia working directory (default)\n\"somepath\": String of output directory e.g. \"~/outdir\", or of filename e.g. \"~/outdir/outfile.tex\"\ntimeout = -1: nbconvert cell timeout in seconds. Defaults to -1 (no timeout)\nnbconvert_options::AbstractString = \"\": String of additional options to pass to nbconvert, such as \"--allow-errors\"\njupyter_path::AbstractString = \"jupyter\": Path/command for the Jupyter you want to use. Defaults to \"jupyter\", which runs whatever is linked/alias to that\n\nwarning: Warning\nThe code is not executed by Weave, but by nbconvert. This means that the output doesn't necessarily always work properly; see #116.\n\nnote: Note\nIn order to just convert Weave document to Jupyter Notebook, use convert_doc instead.\n\n\n\n\n\n","category":"function"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"You can specify jupyter used to execute the notebook with the jupyter_path keyword argument (this defaults to the \"jupyter\", i.e. whatever you have linked to that location).","category":"page"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"Instead, you might want to use the convert_doc method below and run the code in Jupyter.","category":"page"},{"location":"notebooks/#Converting-between-formats-1","page":"Working with Jupyter notebooks","title":"Converting between formats","text":"","category":"section"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"You can convert between all supported input formats using the convert_doc function.","category":"page"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"To convert from script to notebook:","category":"page"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"convert_doc(\"examples/FIR_design.jl\", \"FIR_design.ipynb\")","category":"page"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"and from notebook to Markdown use:","category":"page"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"convert_doc(\"FIR_design.ipynb\", \"FIR_design.jmd\")","category":"page"},{"location":"notebooks/#","page":"Working with Jupyter notebooks","title":"Working with Jupyter notebooks","text":"convert_doc(infile::AbstractString, outfile::AbstractString)","category":"page"},{"location":"notebooks/#Weave.convert_doc-Tuple{AbstractString,AbstractString}","page":"Working with Jupyter notebooks","title":"Weave.convert_doc","text":"convert_doc(infile::AbstractString, outfile::AbstractString; format::Union{Nothing,AbstractString} = nothing)\n\nConvert Weave documents between different formats\n\ninfile: Path of the input document\noutfile: Path of the output document\nformat = nothing: Output document format (optional). It will be detected automatically from the outfile extension. You can also specify either of \"script\", \"markdown\", \"notebook\", or \"noweb\"\n\n\n\n\n\n","category":"method"},{"location":"function_index/#Function-index-1","page":"Function index","title":"Function index","text":"","category":"section"},{"location":"function_index/#","page":"Function index","title":"Function index","text":"","category":"page"},{"location":"#Weave.jl-Scientific-Reports-Using-Julia-1","page":"Weave.jl - Scientific Reports Using Julia","title":"Weave.jl - Scientific Reports Using Julia","text":"","category":"section"},{"location":"#","page":"Weave.jl - Scientific Reports Using Julia","title":"Weave.jl - Scientific Reports Using Julia","text":"This is the documentation of Weave.jl. Weave is a scientific report generator/literate programming tool for Julia. It resembles Pweave, knitr, R Markdown, and Sweave.","category":"page"},{"location":"#","page":"Weave.jl - Scientific Reports Using Julia","title":"Weave.jl - Scientific Reports Using Julia","text":"Current features","category":"page"},{"location":"#","page":"Weave.jl - Scientific Reports Using Julia","title":"Weave.jl - Scientific Reports Using Julia","text":"Publish markdown directly to HTML and PDF using Julia or Pandoc\nExecute code as in terminal or in a unit of code chunk\nCapture Plots.jl or Gadfly.jl figures\nSupports various input format: Markdown, Noweb, Jupyter Notebook, and ordinal Julia script\nConversions between those input formats\nSupports various output document formats: HTML, PDF, GitHub markdown, Jupyter Notebook, MultiMarkdown, Asciidoc and reStructuredText\nSimple caching of results","category":"page"},{"location":"#","page":"Weave.jl - Scientific Reports Using Julia","title":"Weave.jl - Scientific Reports Using Julia","text":"(Image: Weave in Juno demo)","category":"page"},{"location":"#Contents-1","page":"Weave.jl - Scientific Reports Using Julia","title":"Contents","text":"","category":"section"},{"location":"#","page":"Weave.jl - Scientific Reports Using Julia","title":"Weave.jl - Scientific Reports Using Julia","text":"Pages = [\"getting_started.md\", \"usage.md\",\n\"publish.md\", \"chunk_options.md\", \"notebooks.md\",\n\"function_index.md\"]","category":"page"}]
}
