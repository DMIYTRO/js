

// dialog
	var dlg = new Window('dialog', "Source folder");
var myPath = ''
	var myTextPath = "c://myPath.txt";
		if (myTextPath) {
       var base = new File(myTextPath);
       base.open("r"); 
	   myPath=base.readln();
	   
		}
	
		dlg.sourceFolder = dlg.add('edittext', [20, 15, 380, 35], myPath);
	


	dlg.btnCreate = dlg.add('button', [20, 15, 380, 35], "Go!");;
dlg.sourceFolder.active=true;
//event
dlg.btnCreate.onClick = function()
	{		
			dlg.close();
	}
dlg.addEventListener ("keydown", function (kd) {pressed (kd)});
function pressed (k) {
if(k.keyName === "Enter"){
    dlg.close();
  }
}

dlg.show();
var sourceFolder = dlg.sourceFolder.text;

var kubBrack = false;
kubBrack = true;

var rstop = true;
//rstop = false;

  var exportFolder = "//10.20.1.53/d/AVTOSPUSK/output/";
  var exportFolder7700 = "//10.20.1.50/d/AVTOSPUSK/output/7700/";
 // var exportFolder = "C:/dmitriy/perepechat/ds/sample/diz/d/";
 // var exportFolder = "C:/dmitriy/perepechat/ds/sample/mel_ofs/d/";
//var exportFolderPS = "//10.20.1.50/e/printPS/";
var exportFolderPSkub = "//10.20.1.42/printPS/";
var exportFolderPSsra = "//10.20.1.39/printPS/";
var exportFolderPS3 = "//10.20.1.43/printPS/";
var exportFolderPSsra91 = "//10.20.1.39/printPS/";

var folderSRA91 = 'c:/jdf_1/';

var exportFolder8200 = exportFolder;
var exportFolderPS8200 = "//10.20.1.44/printPS/";
var folder8200 = 'c:/jdf_8/';;	

var exportFolder9200 = exportFolder;
var exportFolderPS9200 = "//10.20.1.45/printPS/";
var folder9200 = 'c:/jdf_4/';

var exportFolder9200_5 = exportFolder;
var exportFolderPS9200_5 = "//10.20.1.135/printPS/";
var folder9200_5 = 'c:/jdf_5/';

//exportFolderPSkub = exportFolderPSsra;
exportFolderPSsra = exportFolderPS3;

var exportFolderPS7700 = "//10.20.1.37/printPS/";
var folderSRA = 'c:/jdf_1/';
var folderKub = 'c:/jdf/';
var folder3 = 'c:/jdf_3/';

//folderKub = folderSRA;
folderSRA = folder3;
//var folderKub = "//10.20.1.50/d/AVTOSPUSK/output/PS/9100_2/";

exportFolderCRASH = "//10.20.2.52/printPS/";//"c:/printPS/";

//exportFolderCRASH = "//10.20.1.53/d/AVTOSPUSK/PS/";

exportFolderPS8200=exportFolderPS9200_5 = exportFolderPSsra =exportFolderPS9200 = exportFolderPSkub = exportFolderPS7700 = exportFolderCRASH;

var folder7700 = 'c:/jdf_7/';

var folder7200 = 'c:/jdf_72/';

//folder7700=folder7200

//folderSRA = folderKub

folderSRA91 =folder7700

//folderSRA = folder3 = folderKub = folder9200_5 = folder7700

var checkNotJdf = false;
if (!exportFolder.exists) new Folder(exportFolder).create();
//if (!exportFolderPS.exists) new Folder(exportFolderPS).create();

var filename;
white_lack = false;

var multi = false;
var konvlam = false;
var trubles = false;
var NamePos = "w";
var filePS;
var arrayJdf =[];
var mat_spec = [
'Raf',
'mel',
'barh',
'IL_2s_toile_m',
'285_Dali_c',
'285_SD_crystal',
'285_SD_diamond',
'285_SD_opal',
'285_SD_dolomite',
'285_SD_quartz',
'285_Dali_b',
'350_Flora_350',
'330_Plike_330',
'330_Plike_2s_red',
'330_Plike_2s_grafite',
'330_Plike_2s_brown',
'330_Plike_2s_black',
'330_Plike_2s_blue',
'300_SG',
'Iceblink_b',
'250_Splendorlux_met_arg',
'300_IL_2s_toile',
'300_Sirio_White',
'300_Sirio_Platinum',
'savvibrite',
'sinarvanda',
//'craft300',
'300_T_gesso',
'300_T_crema',
'Ispira_saggezza',
'Ispira_fascino',
'lapislazuli',
'Bohui_m_250',
'Uniboard_Cream_250',
'Majes',
'SD_silver',
'290_Sirio_color_bruno',
'280_Monnalisa'

];
var mat_black = [
'330_Plike_2s_grafite',
'330_Plike_2s_black',
'330_Plike_2s_red',
'330_Plike_2s_brown',
'240_Stardream_lapislazuli',
'360_Ispira',
'330_Plike_2s_blue',
'300_Wild_black',
'290_Sirio_tela_dark_blue',
'300_Notturno_liscia',
'360_Nettuno_blu_navy',
'300_Dali_nero',
'barh'
];
var checkNotJdfCount = "";
var fileList = Folder(sourceFolder).getFiles();
if (fileList == 0)
	{
		alert ("Алё! Гараж! Файлы где? аааа?");
	}

else { 
		for(var a = 0; a<fileList.length;a++)
		{
//var exportFolder = "//10.20.1.50/d/AVTOSPUSK/output/";
			var p92 = false;
			var diz = false;
			var myPaperH;
			var paperSelect ="";
			var presetName = false;
			var file = fileList[a];
			var filename = file.name;
			var sra = false;
			var white = false;
			var die = false;
			var chb= false;
			var kash = false;
			
			var displacement = 2;
				if(file instanceof File && file.name.match(/\.(pdf)$/i))
					{
						
						if( !file.name.match(/multipage/gi) && !file.name.match(/Konlam/gi) && !file.name.match(/\(198x210\)/gi) && !file.name.match(/\(210x198\)/gi) && !((file.name.match(/_white_(?!mat)/gi) || file.name.match(/_wc_/gi)) && file.name.match(/add_lack/gi)&& !file.name.match(/\(305x215\)/gi)))
						{
							var multiPDF = false;
							checkPlot();
							getPaper();
							checkSRA();
							
							var sheetPrintrun = Impose(file, paperW, paperH, alternativePaperW, alternativePaperH);
							if(sheetPrintrun!=false)
							{
							if(sheetPrintrun>50)
								{
									var dlg = new Window('dialog', file.name,[850, 500, 1250, 580]);

									
										dlg.sborkaName = dlg.add('edittext', [160, 5, 240, 30], sheetPrintrun);


									dlg.btnCreate = dlg.add('button', [20, 40, 380, 65], "Да!");;

									dlg.btnCreate.onClick = function()
									{	
										
										dlg.close();
										
										
									}
								dlg.show();
								sheetPrintrun = dlg.sborkaName.text;
								}
							clearFace();
							tiraj();
							checkWhite();
							checkImposePaper();
							checkChb();
							getPresetName();
							
							if(!presetName)
							{
								checkNotJdf = true;
							checkNotJdfCount = checkNotJdfCount + filename + '\n';
							}
							else
							{
							//if(!filename.match(/_2-([20])_/gi)){ 
							getFolder();
							createJDF();
							savePS();
							//	}
								
							}
							if(die)
							{
								exit();
							}
							saveAndClose();
							}
							else
							{	if(multiPDF)
								{
									multi = true;
										folderPDF = sourceFolder + "/multipage/"
										ex = folderPDF + filename;
										if (!folderPDF.exists) new Folder(folderPDF).create();

										file.copy(ex);

										file.remove();
								}
							else{
								folderPDF = sourceFolder + "/trubles/"
										ex = folderPDF + filename;
										if (!folderPDF.exists) new Folder(folderPDF).create();

										file.copy(ex);

										file.remove();
										trubles = true;
							}
							}
						}
						else
						{
							if(file.name.match(/KonvLam/gi) || file.name.match(/Konlam/gi))
									{
										konvlam = true;
										folderPDF = sourceFolder + "/KonvLam/"
										ex = folderPDF + filename;
										if (!folderPDF.exists) new Folder(folderPDF).create();

										file.copy(ex);

										file.remove();
									}
									if(file.name.match(/\(198x210\)/gi) || file.name.match(/\(210x198\)/gi))
									{
										trubles = true;
										folderPDF = sourceFolder + "/198x210/"
										ex = folderPDF + filename;
										if (!folderPDF.exists) new Folder(folderPDF).create();

										file.copy(ex);

										file.remove();
									}
									if(file.name.match(/multipage/gi))
									{
										multi = true;
										folderPDF = sourceFolder + "/multipage/"
										ex = folderPDF + filename;
										if (!folderPDF.exists) new Folder(folderPDF).create();

										file.copy(ex);

										file.remove();
									}
									if((file.name.match(/white/gi) || file.name.match(/_wc_/gi)) && file.name.match(/add_lack/gi))
									{
										white_lack = true;
										folderPDF = sourceFolder + "/white_lack/"
										ex = folderPDF + filename;
										if (!folderPDF.exists) new Folder(folderPDF).create();

										file.copy(ex);

										file.remove();
									}
						}
					}
		}
}
function checkChb()
{
	getplot = parseInt(filename.match(/[0-9]*_[a-z]*_\(/gi));
		if(isNaN(getplot))
	{
		getplot = parseInt(filename.match(/[0-9]*_[a-z0-9]*_[a-z]*/gi)[1]);
	}
	
	if((filename.match(/2-([20])_/gi) || filename.match(/1-([10])_/gi)) && getplot<166){
chb=true;
	}
}
function checkPlot()
{
	if(!filename.match(/Munken_Pure/g)&& !filename.match(/SplendorGel_EW/g)&& !filename.match(/GSK_EW/g)&& !filename.match(/blue_250/g)&& !filename.match(/Uniboard_Cream/g)&& !filename.match(/Bohui_m/g)){
		
	
	if (filename.match(/_90_\(/g))
{
	filename = filename.replace(filename.match(/_90_\(/g), "_90_mel_gl_(");
}
			if (filename.match(/_115_\(/g))
{
	filename = filename.replace(filename.match(/_115_\(/g), "_115_mel_gl_(");
}
		if (filename.match(/_130_\(/g))
{
	filename = filename.replace(filename.match(/_130_\(/g), "_130_mel_gl_(");
}
if (filename.match(/_131_\(/g))
{
	filename = filename.replace(filename.match(/_131_\(/g), "_130_mel_(");
}
	if (filename.match(/_150_\(/g))
{
	filename = filename.replace(filename.match(/_150_\(/g), "_150_mel_gl_(");
}
	if (filename.match(/_163_\(/g))
{
	filename = filename.replace(filename.match(/_163_\(/g), "_163_Raf_mel_spro_(");
}
if (filename.match(/_170_\(/g))
{
	filename = filename.replace(filename.match(/_170_\(/g), "_170_mel_gl_(");
}
	if (filename.match(/_250_\(/g))
{
	filename = filename.replace(filename.match(/_250_\(/g), "_250_mel_(");
}
	if (filename.match(/_200_\(/g))
{
	filename = filename.replace(filename.match(/_200_\(/g), "_200_mel_gl_(");
}
if (filename.match(/_350_\(/g))
{
	filename = filename.replace(filename.match(/_350_\(/g), "_350_mel_(");
}
if (filename.match(/_450_\(/g))
{
	filename = filename.replace(filename.match(/_450_\(/g), "_450_mel_(");
}
if (filename.match(/_300_\(/g))
{
	filename = filename.replace(filename.match(/_300_\(/g), "_300_mel_(");
}
if (filename.match(/_253_\(/g))
{
	filename = filename.replace(filename.match(/_253_\(/g), "_250_ofset_(");
}
if (filename.match(/_80_\(/g))
{
	filename = filename.replace(filename.match(/_80_\(/g), "_80_ofset_(");
}
if (filename.match(/_171_\(/g))
{
	filename = filename.replace(filename.match(/_171_\(/g), "_170_ofset_(");
}
if (filename.match(/_151_\(/g))
{
	filename = filename.replace(filename.match(/_151_\(/g), "_150_ofset_(");
}
if (filename.match(/_120_\(/g))
{
	filename = filename.replace(filename.match(/_120_\(/g), "_120_ofset_(");
}
}
}
function checkWhite()
{
	for(i=0; i<mat_black.length; i++)
	{
		if(filename.match(mat_black[i]))
		{
			var avWhite = false;
			for (var i = 0; i < app.activeDocument.inks.length; i++) {
				var color = app.activeDocument.inks[i];
				
				if(color.name == "White")
				{
					avWhite = true;
				}
			}

			if(!avWhite)
			{
				var myColor = app.activeDocument.colors.add();
				myColor.model = ColorModel.SPOT;
				myColor.space = ColorSpace.CMYK;
				myColor.colorValue = [50, 0, 0, 0];
				myColor.name = "White";
			}
			i = mat_black.length+1;
			white = true;	
		}
	}
	/*if(filename.match(/_w+l_\(/g))
	{
		white = true;
	}*/
}
function getFolder()
{
if(paperSelect == 'Kub' || paperSelect == 'Kub450' || paperSelect == '328x389')
{
	jdfFolder = folderKub;	
	exportFolderPS = exportFolderPSkub;

}	

if(paperSelect == 'SRA3'||paperSelect == 'SRA33' || paperSelect == '318x487' || paperSelect == '318x478')
{
	exportFolderPS = exportFolderPSsra;
	jdfFolder = folderSRA;	
	if(filename.match(/Raf_/gi)|| filename.match(/raflatak/gi))
	{
		exportFolderPS = exportFolderPSkub;
		jdfFolder = folderKub;	
	}
}
if(filename.match(/450_mel_/gi))
		{
			exportFolder = exportFolder9200_5;
	exportFolderPS = exportFolderPS9200_5;
	jdfFolder = folder9200_5;	
			
		
		}
		if(p92 || sra)
		{
	exportFolder = exportFolder9200;
	exportFolderPS = exportFolderPS9200;
	jdfFolder = folder9200;	
			
		}
	
if(filename.match(/Raf_/gi)|| filename.match(/raflatak/gi))
	{
	//exportFolderPS = exportFolderPSsra91;
	jdfFolder = folder7700;
		exportFolderPS = exportFolderCRASH;
		//jdfFolder = folderSRA91;
	
	}
getplot = parseInt(filename.match(/[0-9]*_[a-z]*_\(/gi));
		if(isNaN(getplot))
	{
		getplot = parseInt(filename.match(/[0-9]*_[a-z]*_[a-z]*/gi)[1]);
	}
	
if((filename.match(/2-([20])_/gi) || filename.match(/1-([10])_/gi)) && getplot<166){

	exportFolder = exportFolder8200;
	//exportFolderPS = exportFolderPS8200;
	exportFolderPS = exportFolderCRASH;
	//jdfFolder = folder8200;	
	
	if(presetName.match(/_2-2/g))
	{
	csh = "_1-1";
	presetName = presetName.replace(filename.match(/_2-2/g), csh);
	}
	else{
	csh = "_1-0";
	presetName = presetName.replace(filename.match(/_2-0/g), csh);
	}
}
	



if(diz || filename.match(/Belak/gi))
{
	exportFolder = exportFolder7700;
	exportFolderPS = exportFolderPS7700;
	jdfFolder = folder7700;	
}
/*
if(diz || filename.match(/Belak/gi))
{
	p92=true;
}
if(p92)
		{
	exportFolder = exportFolder9200;
	exportFolderPS = exportFolderPS9200;
	jdfFolder = folder9200;	
			
		}
*/


}
function getPresetName()
{
colorShem = filename.match(/_[5421]-([54210])_/gi).toString().substr(1, 3);
	if(filename.match(/[0-9]*_mel_(?!gl)/gi))
	{
		
		/*if(filename.match(/450_mel_/gi))
		{
			colorShem = "4-0";
			if(filename.match(/_1-([10])_/gi)) 
			{colorShem = "1-0";}
			
		}*/
		presetName = "mat_"  + parseInt(filename.match(/[0-9]*_mel/gi)) +"_"+paperSelect+"_" + colorShem;
		if(filename.match(/450_mel_/gi) && paperSelect == "SRA3")
		{
			presetName = "mat_"  + parseInt(filename.match(/[0-9]*_mel/gi)) +"_318x478_" + colorShem;
			
		}
		
	}
	if(filename.match(/[0-9]*_mel_gl/gi))
	{
		presetName = "gloss_"  + parseInt(filename.match(/[0-9]*_mel/gi)) +"_"+paperSelect+"_"+filename.match(/_[421]-([4210])_/gi).toString().substr(1, 3)
		
	}
	if(file.name.match(/\(KONV\)/gi)&&file.name.match(/\(229x162\)/gi))
	{
		presetName = "KONV_229x162";
		diz = true;
	}
	if(file.name.match(/\(KONV\)/gi)&&file.name.match(/\(220x110\)/gi))
	{
		presetName = "KONV_220x110";
		diz = true;
	}
	if(filename.match(/[0-9]*_ofset/gi))
	{
		presetName = "ofs_"  + parseInt(filename.match(/[0-9]*_ofset/gi)) +"_"+paperSelect+"_"+filename.match(/_[421]-([4210])_/gi).toString().substr(1, 3)
		
	}
	if(filename.match(/[0-9]*_mondi/gi))
	{
		presetName = "mondi_"  + parseInt(filename.match(/[0-9]*_mondi/gi)) +"_"+filename.match(/_[421]-([4210])_/gi).toString().substr(1, 3)
		p92 = true;
	}
	if(filename.match(/[0-9]*_Munken_Pure/gi))
	{
		presetName = "mondi_"  + parseInt(filename.match(/[0-9]*_mondi/gi)) +"_"+filename.match(/_[421]-([4210])_/gi).toString().substr(1, 3)
		p92 = true;
	}
	if(filename.match(/craft300/gi))
	{
		presetName = "Kraft_"+paperSelect+"_4-0";
		diz = true;
	}
	if(filename.match(/80_craft/gi))
	{
		presetName = "Kraft_80_SRA3_"+filename.match(/_[421]-([4210])_/gi).toString().substr(1, 3);
		diz = true;
	}
	if(filename.match(/Raf_/gi))
	{
		presetName = "Raf_" +paperSelect+"_"+filename.match(/_[421]-([4210])_/gi).toString().substr(1, 3);
		//diz = true;
	}
	if(filename.match(/Raf_offset/gi) || filename.match(/raflatak_ofs/gi))
	{
		presetName = "Raf_offset_" +paperSelect+"_"+filename.match(/_[421]-([4210])_/gi).toString().substr(1, 3);
		//diz = true;
	}
	if(filename.match(/Laid_Ivory_/gi)|| filename.match(/Semigloss_Cover_/gi))
	{
		presetName = "Raf_" +paperSelect+"_"+filename.match(/_[421]-([4210])_/gi).toString().substr(1, 3);
		diz = true;
	}
	if(filename.match(/mirror/gi))
	{
		presetName = "mirror";
		diz = true;
	}
	if(filename.match(/barh/gi))
	{
		presetName = "barh";
		diz = true;
	}
	if(filename.match(/SYNAPS/gi))
	{
		presetName = "SYNAPS";
		//p92 = true;
	}
	
	if(filename.match(/bohui/gi)|| filename.match(/Uniboard_Cream/gi)|| filename.match(/Zenith_C/gi))
	{
		presetName = "Bahui_SRA3_4-0";
		p92 = true;
		if(paperSelect == "Kub")
		{
			presetName = "Bahui_Kub_4-0";	
		}
	}
	if(filename.match(/dali/gi))
	{
		presetName = "Dali_SRA3_4-0";
		diz = true;
	}
	if(filename.match(/dali_c/gi) || filename.match(/dali_b/gi))
	{
		presetName = "Dali_SRA3_4-0";
	
		if(paperSelect == "Kub")
		{
			presetName = "Dali_Kub_4-0";	
		}
		diz = true;
	}
	if(file.name.match(/_Rit_white_gl_/gi))
		{
		presetName = "Ritrama_Gloss_" + colorShem;
		
		diz = true;
		}
		if(file.name.match(/_Ritr_white_mat_/gi))
		{
		presetName = "Ritrama_Mat_" + colorShem;
		
		diz = true;
		}
		if(file.name.match(/_Rit_transp_/gi))
		{
		presetName = "Ritrama_Clear_" + colorShem;
		
		diz = true;
		}
		if(file.name.match(/_500_oracal_transp_mat_/gi))
		{
		presetName = "oracal_clrmat_" + colorShem;
		
		diz = true;
		}
	if(file.name.match(/T_crema/gi) || file.name.match(/T_gesso/gi))
		{
		presetName = "Tintoretto_SRA3_4-0";
		if( paperSelect == "Kub")
		{
			presetName = "Tintoretto_Kub_4-0";
			
		}
		diz = true;
		}	
if(filename.match(/285_SD_/gi) || filename.match(/240_Stardream/gi))
	{
		presetName = "Stardream_SRA3_4-0";
		
	
		if( paperSelect == "Kub")
		{
			presetName = "Stardream_Kub_4-0";
			
		}
		diz = true;
	}
	if(filename.match(/120_SD_/gi))
	{
		presetName = "Stardream_120";
		
	
		diz = true;
	}
	if(file.name.match(/Wild_black/gi))
		{
		presetName = "Wild-Black_SRA3_4-0";
		
		diz = true;
		}
		if(file.name.match(/350_Flora/gi))
		{
		presetName = "Flora_SRA3_4-0";
		
		diz = true;
			if(paperSelect == "Kub")
			{
			presetName = "Flora_Kub_4-0";
				}
		}
		
		if(file.name.match(/100_Flora/gi))
		{
		presetName = "Flora_100";
		
		diz = true;
		}
		if(file.name.match(/Sirio/gi))
		{
		presetName = "Sirio-color_SRA3_4-0";
		/*if( paperSelect == "Kub")
		{
			presetName = "Sirio_Kub_4-0";
		}
		diz = true;
		}
		if(file.name.match(/300_Sirio_White/gi))
		{
		presetName = "Sirio-white_SRA3_4-0";
		*/
		if( paperSelect == "Kub")
		{
			presetName = "Sirio_Kub_4-0";
		}
		diz = true;
		}
		if(filename.match(/Plike/gi))
		{
		presetName = "Plike-color_SRA3_4-0";
		if( paperSelect == "Kub")
		{
			presetName = "Plike-color_Kub_4-0";	
		}
		diz = true;
		}
		if(file.name.match(/330_Plike_330/gi))
		{
		presetName = "Plike-white_SRA3_4-0";
		if( paperSelect == "Kub")
		{
			presetName = "Plike-white_Kub_4-0";
			
		}
		diz = true;
		}
		if(file.name.match(/Splendorlux/gi))
		{
		presetName = "Splendorlux-metal_SRA3_4-0";
		if( paperSelect == "Kub")
		{
			presetName = "Splendorlux-metal_Kub_4-0";
			
		}
		diz = true;
		}
		if(file.name.match(/Notturno/gi))
		{
		presetName = "Notturno_SRA3_4-0";
		
		diz = true;
		}
		if(file.name.match(/Majes/gi))
		{
		presetName = "Majestic_SRA3_4-0";
		if( paperSelect == "Kub")
		{
			presetName = "Majestic_Kub_4-0";
			
		}
		diz = true;
		}
		if(filename.match(/Belak/gi))
{
	presetName = "Lak_SRA3_4-0";
		if( paperSelect == "Kub")
		{
			presetName = "Lak_Kub_4-0";
			
		}
}
		if(file.name.match(/Marina/gi))
		{
		presetName = "Marina-Sabbia_SRA3_4-0";
		
		diz = true;
		}
		if(file.name.match(/monnalisa/gi))
		{
		presetName = "Monna-Lisa_SRA3_4-0";
		
		diz = true;
		}
		if(file.name.match(/monnalisa/gi) && paperSelect == "Kub")
		{
		presetName = "Monna-Lisa_Kub_4-0";
		
		diz = true;
		}
		if(file.name.match(/300_SG/gi) || file.name.match(/SplendorGel_EW/gi))
		{
		presetName = "Splendorgel_SRA3_4-0";
		if(paperSelect == "Kub")
		{
			presetName = "Splendorgel_Kub_4-0";
		}
		
		diz = true;
		}
		if(file.name.match(/Iceblink_b/gi))
		{
		presetName = "Iceblink_SRA3_4-0";
		if(paperSelect == "Kub")
		{
			presetName = "Iceblink_Kub_4-0";
		}
		
		diz = true;
		}
		if(file.name.match(/300_IL_2s_toile/gi))
		{
			
		presetName = "Icelite_SRA3";
		if(paperSelect == "Kub")
		{
			
			presetName = "Icelite_Kub";
		}
		colorShem = filename.match(/_[41]-([410])_/gi).toString().substr(1, 3);
		presetName = presetName + "_"+colorShem;
		diz = true;
		}
		if(file.name.match(/120_Len/gi))
		{
		presetName = "Icelite_120_"+colorShem;
		
		
		diz = true;
		}
		if(file.name.match(/Ispira_fascino/gi) || file.name.match(/Ispira_saggezza/gi))
		{
		presetName = "Ispira_SRA3_4-0";
		diz = true;
		}
		if(file.name.match(/GSK_EW/gi))
		{
		presetName = "Kalka_SRA3_4-0";
		diz = true;
		}
		if(filename.match(/260_sinarvanda/gi))
		{
		presetName = "Sinarvanda_SRA3_4-0";
		if(paperSelect == "Kub")
		{
			
			presetName = "Sinarvanda_Kub_4-0";
		}
		p92 = true;
		}
		if(filename.match(/260_savvibrite/gi))
		{
		presetName = "SavviBrite_SRA3_4-0";
		if(paperSelect == "Kub")
		{
			
			presetName = "SavviBrite_330x348_4-0";
		}
		p92 = true;
		}
}

function checkImposePaper()
{
	switch(myPaperH)
	{
		case 389: paperSelect = "328x389";  break;
		case 348: paperSelect = "Kub";  break;
		case 448: paperSelect = "SRA3";  break;
		case 487: paperSelect = "318x487";  break;
		
	}
}
function tiraj()
{
result = filename.match(/_T[0-9]*?_/g).toString();
result = result.substr(2, result.length - 3);

}
function clearFace()
{
	if (filename.match(/%20/gi))
	{
		mass_space = filename.match(/%20/gi).length;
		for(i=0; i<mass_space; i++)
		{
		filename = filename.replace("%20", "");
		}
	}
if (filename.match(/-face/g))
{
	filename = filename.replace(filename.match(/-face/g), "");
}

}
function checkSRA()
{
	if(file.name.match(/\(SRA3\)/gi) || file.name.match(/\(SRA3P\)/gi))
		{
			sra=true;
		}
}
function getPaper()
{
	
		
		if(filename.match(/_SR_/gi))
		{
			paperW= 318;
			paperH= 448;
			alternativePaperW= 318;
			alternativePaperH= 448;
			
		}
		if(filename.match(/_SRP_/gi))
		{
			paperW= 330;
			paperH= 487;
			alternativePaperW= 330;
			alternativePaperH= 487;
		}
		if(filename.match(/_KBS_/gi))
		{
			paperW= 330;
			paperH= 348;
			alternativePaperW= 330;
			alternativePaperH= 348;
		}
		if(filename.match(/_KBB_/gi))
		{
			paperW= 328;
			paperH= 389;
			alternativePaperW= 328;
			alternativePaperH= 389;
		}
	
	
}	
function Impose(file, paperW, paperH, alternativePaperW, alternativePaperH) {
	//********************************************************
//SETTINGS
var bleed = 0;
var vkk = false;
var notFit = false;

		
//********************************************************

    if (typeof alternativePaperW != 'number') {
        alternativePaperW = 0;
        alternativePaperH = 0;
    }
    if (!File(file).exists) {
        //Что делать, если файл не существует
        return false; //прекращаем раскладывать этот макет
    }
    var fileName = File(file).name;
//~     var match = /_[41]-([410])_.*\((\d{2,3})x(\d{2,3})\).*T(\d{1,5})_/gi.exec(fileName);
    var match = /_[5421]-([54210])_/gi.exec(fileName);
    if (match == null) {
		
        //Что делать, если в названии файла не удалось выделить  цветность
        return false; //прекращаем раскладывать этот макет
    }
    var hasTwoSides = (match[1] != 0);
 /*   match = /\((\d{2,3})x(\d{2,3})\)/gi.exec(fileName);
    if (match == null) {
		alert("color")
        //Что делать, если в названии файла не удалось выделить размер
        return false; //прекращаем раскладывать этот макет
    }*/
 if(filename.match(/_SR_/gi))
		{
			var objW = 318;
    var objH = 448;
			
		}
		if(filename.match(/_SRP_/gi))
		{
		var objW = 330;
    var objH = 487;
		}
		if(filename.match(/_KBS_/gi))
		{
		var objW = 330;
    var objH = 348;
		}
		if(filename.match(/_KBB_/gi))
		{
		var objW = 328;
    var objH = 389;
		}

	
	
    match = /_LP(\d{1,6})/gi.exec(fileName);
    if (match == null) {
        //Что делать, если в названии файла не удалось выделить тираж
        return false; //прекращаем раскладывать этот макет
    }
    var printrun = match[1];
	
    var scheme = MakeLayoutScheme(paperW, paperH, objW, objH);
	
    if (scheme.effectiveArea < 85) {
        var alternativePaperScheme = MakeLayoutScheme(alternativePaperW, alternativePaperH, objW, objH);
        if ((scheme.scheme.length == 0) && (alternativePaperScheme.scheme.length == 0)) {
            //Макеты не помещаются ни на одну из бумаг
            return false; //прекращаем раскладывать этот макет
        }
          if (alternativePaperScheme.effectiveArea > scheme.effectiveArea) {
			//  alert(scheme.effectiveArea)
			//  alert(alternativePaperScheme.effectiveArea)
            scheme = alternativePaperScheme;
            paperW = alternativePaperW;
            paperH = alternativePaperH;
        }
    }
	//exit();
    var bkp = app.marginPreferences.properties;
    app.marginPreferences.properties = {top:0, left:0, bottom:0, right:0, columnGutter:0, columnCount:1};
    var doc = app.documents.add();
    with (doc.viewPreferences) {
        horizontalMeasurementUnits = MeasurementUnits.millimeters;
        verticalMeasurementUnits = MeasurementUnits.millimeters;
    }
    with(doc.documentPreferences) {  
        pageHeight = paperH;  
        pageWidth = paperW;  
        pagesPerDocument = 2;
        facingPages = false;
    }
    app.marginPreferences.properties = bkp;
    app.pdfPlacePreferences.pdfCrop = 1131573328;
    app.pdfPlacePreferences.pageNumber = 1;
    var pdf = {side1: null, side2: null, side3: null, hasTwoSides: true, isHor: false};
    try {
        app.pdfPlacePreferences.pageNumber = 1;
        pdf.side1 = doc.pages[0].rectangles.add({geometricBounds:[0, 0, 20, 20]});
        pdf.side1.place(new File(file), false);
        pdf.side1.strokeWeight = 0;
		pdf.side1.strokeColor = "None";
		pdf.side1.fillColor = "None";
		
        app.pdfPlacePreferences.pageNumber = 2;
        pdf.side2 = doc.pages[0].rectangles.add({geometricBounds:[25, 0, 45, 20]});
        pdf.side2.place(new File(file), false);
        pdf.side2.strokeWeight = 0;
		pdf.side2.strokeColor = "None";
		pdf.side2.fillColor = "None";
		
		app.pdfPlacePreferences.pageNumber = 3;
        pdf.side3 = doc.pages[0].rectangles.add({geometricBounds:[50, 0, 70, 20]});
        pdf.side3.place(new File(file), false);
        pdf.side3.strokeWeight = 0;
		pdf.side3.strokeColor = "None";
		pdf.side3.fillColor = "None";
		
		
    } catch (err) {
        //Что делать, если произошла ошибка во время прилинковывания ПДФки
        return false; //прекращаем раскладывать этот макет
    }
	
    if (pdf.side2.pdfs[0].pdfAttributes.pageNumber == 1) {
        pdf.hasTwoSides = false;
        pdf.side2.remove();
        doc.pages[1].remove();
    } else {
        pdf.side2.move(doc.pages[1]);
    }   
	
    if (hasTwoSides != pdf.hasTwoSides) {
        //Что делать, если количество страниц в PDF не соответствует цветности в названии файла
        return false; //прекращаем раскладывать этот макет
    }
	if (pdf.side3.pdfs[0].pdfAttributes.pageNumber > 2) {
		multiPDF = true;
        return false; //MULTIPAGE
    } else {
        pdf.side3.remove();
    }   
	
	
	
    pdf.isHor = IsHor(pdf.side1.pdfs[0].geometricBounds);
    for (var i = 0; i < scheme.scheme.length; i++) {
        var currentObj = (i == 0) ? pdf.side1 : pdf.side1.duplicate();
        currentObj.rotationAngle = (IsHor(scheme.scheme[i].geometricBounds) != pdf.isHor) ? 90 : 0;
        currentObj.geometricBounds = scheme.scheme[i].geometricBounds;
		
		if(notFit)
		{
		var rb = currentObj.geometricBounds;  
		var ib =  new  Array (rb[0], rb[1], rb[2] +1 , rb[3] +1);  
		currentObj.allGraphics[0].geometricBounds = ib; 
        currentObj.fit (FitOptions.CENTER_CONTENT);
		}
		else{
			currentObj.fit (FitOptions.CONTENT_TO_FRAME);
		}
		
        if (hasTwoSides) {
            currentObj = (i == 0) ? pdf.side2 : pdf.side2.duplicate();
            currentObj.rotationAngle = (IsHor(scheme.scheme[i].geometricBounds) != pdf.isHor) ? -90 : 0;
            currentObj.geometricBounds = makeBackCoordinates(scheme.scheme[i].geometricBounds, paperW);
        if(notFit)
		{
		var rb = currentObj.geometricBounds;  
		var ib =  new  Array (rb[0], rb[1], rb[2] +1 , rb[3] +1);  
		currentObj.allGraphics[0].geometricBounds = ib; 
        currentObj.fit (FitOptions.CENTER_CONTENT);
		}
		else{
			currentObj.fit (FitOptions.CONTENT_TO_FRAME);
		}
        }
    }
	myMontag = app.activeDocument.pages[0];
	var avs = 99.99;
	var ahs = 100.01;
	
	if ((myMontag.rectangles[0].allGraphics[0].absoluteVerticalScale<avs)||(myMontag.rectangles[0].allGraphics[0].absoluteHorizontalScale<avs)||(myMontag.rectangles[0].allGraphics[0].absoluteVerticalScale>ahs)||(myMontag.rectangles[0].allGraphics[0].absoluteHorizontalScale>ahs))	
	{
		
		mh = Math.round(myMontag.rectangles[0].allGraphics[0].absoluteHorizontalScale);
		mv = Math.round(myMontag.rectangles[0].allGraphics[0].absoluteVerticalScale);
		
		if(vkk)
		{
			vscale = 249;
			hscale = 252;
		}
		else{
			vscale = 254;
			hscale = 254;
		}
		
		
		if ((mv==vscale) && (mh==hscale))
		{
			
		}
		else{
			if(rstop){
				return false;
			}
		}
	   
		
	}
	if(hasTwoSides){
	myMontag = app.activeDocument.pages[1];
	if ((myMontag.rectangles[0].allGraphics[0].absoluteVerticalScale<avs)||(myMontag.rectangles[0].allGraphics[0].absoluteHorizontalScale<avs)||(myMontag.rectangles[0].allGraphics[0].absoluteVerticalScale>ahs)||(myMontag.rectangles[0].allGraphics[0].absoluteHorizontalScale>ahs))	
	{
	   if(rstop){
				return false;
			}
	}
	}
	myPaperH = paperH;
    return Math.ceil(printrun / scheme.scheme.length);
}

function makeBackCoordinates(bounds, pageW) {    
    return [bounds[0], pageW - bounds[3], bounds[2], pageW - bounds[1]];
}

function IsHor(bounds) {
    return (bounds[3] - bounds[1]) > (bounds[2] - bounds[0]);
}

function CalculateBlocks(paperW, paperH, objW, objH, level, maxlevel) {
    var emptyRes = {count: 0, levels: [{x: 0, y:0}, {x: 0, y:0}, {x: 0, y:0}, {x: 0, y:0}]};
    var res = {count: 0, levels: [{x: 0, y:0}, {x: 0, y:0}, {x: 0, y:0}, {x: 0, y:0}]};
    var xCount = Math.floor(Math.ceil(paperW/objW*1000)/1000);
    var yCount = Math.floor(Math.ceil(paperH/objH*1000)/1000);
    var xCountVert = Math.floor(Math.ceil(paperH/objW*1000)/1000);
    var yCountVert = Math.floor(Math.ceil(paperH/objW*1000)/1000);
    if (((xCount == 0) || (yCount == 0)) && ((xCountVert == 0) || (yCountVert == 0))) return emptyRes;
    for (var x = xCount; x >= 0; x--) {
        var _mLev = ((level == 0) && (x==0)) ? maxlevel + 1 : maxlevel;
        var nextLevel = (level < maxlevel) ? CalculateBlocks(paperH, paperW - x * objW, objW, objH, level + 1, _mLev) : emptyRes;        
        if ((res.count < x * yCount + nextLevel.count) || ((res.count == x * yCount + nextLevel.count) && (CompareLevels(nextLevel.levels, res.levels, level, x, yCount) < 0))) {
            res.levels = nextLevel.levels;
            res.count = x * yCount + nextLevel.count;
            res.levels[level].x = x;
            res.levels[level].y = yCount;
        }
    }
    return res;
	
}

function CompareLevels(newLevels, oldLevels, level, x, y) {
    var res = 0;
    for (var i = 3; i > level; i--) {
        res += ((newLevels[i].x * newLevels[i].y) != 0) * 1;
        res -= ((oldLevels[i].x * oldLevels[i].y) != 0) * 1;
    }
    res += ((x * y) != 0) * 1;
    res -= ((oldLevels[level].x * oldLevels[level].y) != 0) * 1;
    return res;
}

function MakeLayoutScheme(pageW, pageH, width, height) {
    var objW = Math.max(width, height);
    var objH = Math.min(width, height);
    var res = {effectiveArea: 0, scheme: []};
	if(kash){
    var blockCalculation = CalculateBlocks(pageW, pageH, objW, objH, 0, 0);
	}
	else{
		var blockCalculation = CalculateBlocks(pageW, pageH, objW, objH, 0, 2);
	}
    var layout = {count: 0, w: 0, h: 0, mainCol: 0, mainRow: 0, mainFullRow: 0, mainShortRowLenght: 0, addCol: 0, addRow: 0, xAddStart: 0, yAddStart: 0,  xOffset: 0, yOffset: 0};
    with (layout) {
        count = blockCalculation.count;
        if (blockCalculation.levels[0].x * blockCalculation.levels[0].y != 0) {
                w = Math.round(objW);
                h = Math.round(objH);
                mainCol = blockCalculation.levels[0].x + blockCalculation.levels[2].x;
                mainShortRowLenght = blockCalculation.levels[0].x;
                mainRow = blockCalculation.levels[0].y;
                mainFullRow = blockCalculation.levels[2].y;
                addCol = blockCalculation.levels[1].y;
                addRow = blockCalculation.levels[1].x;
                xAddStart = w * blockCalculation.levels[0].x;
                yAddStart = h * blockCalculation.levels[2].y;
        } else {
                w = Math.round(objH);
                h = Math.round(objW);
                mainCol = blockCalculation.levels[1].y;
                mainShortRowLenght = blockCalculation.levels[3].y;
                mainRow = blockCalculation.levels[1].x + blockCalculation.levels[3].x;
                mainFullRow = blockCalculation.levels[1].x;
                addCol = blockCalculation.levels[2].x;
                addRow = blockCalculation.levels[2].y;
                xAddStart = w * blockCalculation.levels[3].y;
                yAddStart = h * blockCalculation.levels[1].x;
        }
        xOffset = (pageW - Math.max(mainCol * w, mainShortRowLenght *w + addCol * h)) / 2;
        yOffset = (pageH - Math.max(mainRow * h, mainFullRow * h + addRow * w)) / 2;
        res.effectiveArea = count*w*h/(pageW*pageH/100);
        for (var y=0; y<mainRow; y++) {
            var colInRow = (y < mainFullRow) ? mainCol : mainShortRowLenght;
            for (var x=0; x<colInRow; x++)
                res.scheme.push({geometricBounds:[yOffset + h*y, xOffset + w*x, yOffset + h*(y+1), xOffset + w*(x+1)]});
        }
        for (var y=0; y<layout.addRow; y++)
            for (var x=0; x<layout.addCol; x++)
                res.scheme.push({geometricBounds:[yOffset + yAddStart + w*y, xOffset + xAddStart + h*x, yOffset + yAddStart + w*(y+1), xOffset + xAddStart + h*(x+1)]});
    }
    return res;
}

function createJDF()
{
	filePS = exportFolderPS +  filename.substr(0, filename.length - 4) + ".ps";

	
	jdfFile =filePS.replace(/\//g, '\\');


	jdfStart = "<?xml version='1.0' encoding='UTF-8'?><JDF xmlns='http://www.CIP4.org/JDFSchema_1_1' Activation='Active' DescriptiveName='";
	
jdfOrderName =filename.substr(0, filename.length - 4);

	jdfToPreset = "' ID='ID1' Status='Ready' Type='Combined' Types='DigitalPrinting' Version='1.3' xmlns:EFI='http://www.efi.com/efijdf' xmlns:jdftyp='http://www.CIP4.org/JDFSchema_1_1_Types' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' JobPartID='JP1' NamedFeatures='";

jdfPreset = "FieryJobPresets "+presetName;

	jdfToFile = "'><ResourcePool><RunList Class='Parameter' ID='RL1' Locked='false' Status='Available'><LayoutElement><FileSpec URL='";



	jdfToCopy = "'/></LayoutElement></RunList><DigitalPrintingParams Class='Parameter' ID='DP1' Locked='false' Status='Available'/><Component Class='Quantity' ComponentType='FinalProduct' DescriptiveName='Digital Printing Output' ID='C1' Locked='false' Status='Available'/><NodeInfo Class='Parameter' ID='NI1' LastEnd='' Status='Available'/><CustomerInfo Class='Parameter' ID='CI1' CustomerID='' Status='Available' PartUsage='Implicit' CustomerJobName='' BillingCode='' CustomerProjectID=''><Contact ContactTypes='Customer'><Person FamilyName='' FirstName=''/></Contact></CustomerInfo></ResourcePool><ResourceLinkPool><ComponentLink Amount='";

copyCount = sheetPrintrun;

	jdfEnd ="' Usage='Output' rRef='C1'/><RunListLink CombinedProcessIndex='0' Usage='Input' rRef='RL1'/><NodeInfoLink Usage='Input' rRef='NI1'/><CustomerInfoLink Usage='Input' rRef='CI1'/><DigitalPrintingParamsLink CombinedProcessIndex='0' Usage='Input' rRef='DP1'/></ResourceLinkPool><AuditPool><Created AgentName='JDFExpress Tickets' AgentVersion='1.0.0.10' TimeStamp='2013-10-16T19:35:11+02:00'/></AuditPool><Comment AgentName='JDFExpress Tickets' AgentVersion='1.0.0.10' Author='admin' Name='Description' TimeStamp='TS'></Comment></JDF>";

	



fileJdf = jdfFolder+jdfOrderName+".jdf";
myJdf = jdfStart+jdfOrderName+jdfToPreset+jdfPreset+jdfToFile+jdfFile+jdfToCopy+copyCount+jdfEnd;

arrayJdf[arrayJdf.length] = [fileJdf,myJdf];					
				
}
function saveJDF()
{	
	for(i=0; i<arrayJdf.length; i++)
	{
						var Loginfo = new File(arrayJdf[i][0]);  
						Loginfo.open("a", "TEXT", "????");  						
						Loginfo.write(arrayJdf[i][1]);  
						Loginfo.close();  
	}
}
function savePS()
{
	try
	{
					var doc = app.activeDocument;
					filePS = exportFolderPS +  filename.substr(0, filename.length - 4) + ".ps";
					var thisPreset = 'myyy';
					doc.printPreferences.activePrinterPreset = app.printerPresets.item(thisPreset);
					if(app.activeDocument.pages.count() == 2)
					{
					doc.printPreferences.pageRange = '1-2';
					}
					else
					{
						doc.printPreferences.pageRange = '1';
					}
					if(doc.printPreferences.activePrinterPreset.printer == 1886611052){//POSTSCRIPT_FILE
						doc.printPreferences.printFile = new File(filePS);
						doc.print(false);
					}
	}
	catch(err)
	{
		var dlg = new Window('dialog', "Повторить?",[1000, 500, 1050, 585]);

		dlg.btnCreate = dlg.add('button', [20, 10, 100, 40], "Да!");
		dlg.btnClose = dlg.add('button', [20, 45, 100, 75], "Нет!");

		dlg.btnCreate.onClick = function()
	{	
		
		dlg.close();
		savePS();
		
	}
		dlg.btnClose.onClick = function()
	{	
		
		dlg.close();
		die=true;
		
		
	}
		dlg.show();
		
	}
}

function saveAndClose()
{

				
	
var doc = app.activeDocument;
doc.close(SaveOptions.no);  

 moveMyFiles();
}
function moveMyFiles()
{
var moveFolder = sourceFolder + "/done/";
if (!moveFolder.exists) new Folder(moveFolder).create();

//var fileList = Folder(sourceFolder).getFiles();
for(i=0; i<fileList.length; i++)
{
	var files = new File (file);
	
	ex = moveFolder +file.name;
	files.copy(ex)
	files.remove();
}
}
if (fileList != 0)
	{
		myAlert = "Готово!";
		

saveJDF();	

alert(myAlert);
}

