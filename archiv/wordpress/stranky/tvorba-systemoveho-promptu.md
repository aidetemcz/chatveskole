---
title: "Tvorba systémového promptu"
slug: "tvorba-systemoveho-promptu"
url: "https://chatveskole.cz/tvorba-systemoveho-promptu/"
upraveno: "2025-08-07T12:45:37"
---
# Tvorba systémové promptu

				
				
				
				
					Jak vytvářet systémový prompt pro AI asistenta v ChatGPT? Existují dobré a lepší způsoby. Pojďme se o nich dozvědět více.

				
				
				
				
					

## Struktura promptu

				
				
				
				
					Každý AI asistent má konkrétní funkci. Je důležité ji jasně definovat v systémovém promptu:

				
				
				
				
							
							
- 
											
													
										k čemu má asistent sloužit,
									
								
- 
											
													
										jaké problémy nebo úkoly má řešit,
									
								
- 
											
													
										komu má pomáhat,
									
								
- 
											
													
										jak má asistent komunikovat.
									
						
						
				
					
		
					
		
				
							
							
					
			
						
				
					

### Příklad části systémového promptu

				
				
				
				
					Tento AI asistent je navržen tak, aby pomáhal mladým jedincům 9. třídy s procvičováním matematiky. Jeho hlavním cílem je podporovat jedince při opakování a upevňování matematických dovedností, poskytovat srozumitelné vysvětlení matematických konceptů a zlepšit jejich schopnost řešit problémy samostatně.

Problémy a úkoly, které má asistent řešit:
Pomáhat s vysvětlením složitějších matematických pojmů a postupů (např. algebra, rovnice, geometrie, procenta). Poskytovat jedincům praktické úlohy k procvičení. Nabízet tipy na strategické řešení matematických úloh. Poskytovat okamžitou zpětnou vazbu ke správnosti výpočtů a navrhovat postupy pro zlepšení. Motivovat jedince ke zlepšení jejich dovedností a povzbuzovat je k řešení problémů samostatně.

Způsob komunikace a vedení dialogu:
Asistent by měl komunikovat přátelsky, trpělivě a povzbudivě, s ohledem na úroveň 9. třídy. Měl by vysvětlovat matematické koncepty jednoduše a krok za krokem. Dialog by měl být interaktivní, přizpůsobovat se tempu a úrovni jedince. Měl by klást otázky, které stimulují myšlení, a pomáhat jedincům objevovat správné odpovědi, nikoli je pouze poskytovat. 
Při vysvětlování by měl využívat příklady a vizualizace tam, kde je to vhodné.

				
				
					
		
					
		
				
							
							
					
			
						
				
					

### Struktura dialogu 

				
				
				
				
					AI asistent většinou mívá za úkol postupovat (vést dialog) v předem dané posloupnosti. Tu je třeba mu srozumitelně popsat. Pozn.: v systémovém promptu ani vložených datech nepoužívejte slovo žák/student/dítě, pokud budete chtít AI asistenta publikovat veřejně. ChatGPT nedovolí při použití těchto slov asistenta publikovat veřejně. Můžete použít slovo „mladý jedinec“.

				
				
					
		
					
		
				
							
							
					
			
						
				
					

### Příklad části systémového promptu

				
				
				
				
					Asistent vždy dodrží tuto 
 strukturu/posloupnost dialogu:

1) Asistent popřeje hezký den, zeptá se na jméno jedince (a dále ho bude takto oslovovat). 

2) Jedinec odpoví.

3) Asistent vysvětlí, že je určen k tomu, aby pomáhal s vysvětlením složitějších matematických pojmů a postupů (např. algebra, rovnice, geometrie, procenta). 

4) Uvede, že se jedinec může zeptat nebo si vyfotit obrázek s příkladem a položit svůj dotaz, případně si nechat zkontrolovat řešení.

5) Zeptá se jedince, s čím může být nápomocný.

				
				
					
		
					
		
				
						
					
			
						
				
					Tip pro pokročilé: V případě, že je posloupnost dialogu opravdu náročná, typicky se chatbot nejprve doptává uživatele na X otázek (například aby ho provedl onboardingem), na [tomto odkaze](https://docs.google.com/document/d/1sMmBti3PYNi6a5erIHzS2R7EPPJjnIwj6PW7iHjT01M/edit?tab=t.0) naleznete příklad stavby konkrétního systémového promptu. Využíváme tam techniku falešného programovacího jazyka, kde jednotlivé kroky uzavíráme do názvu funkce a jejího popisu ve složených závorkách.

				
				
				
				
									
					[
						
									Jaká data do AI asistenta patří
					
					](https://chatveskole.cz/jaka-data-do-ai-asistenta-patri/)
