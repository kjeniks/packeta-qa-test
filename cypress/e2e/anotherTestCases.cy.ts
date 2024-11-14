/*
Další možnosti testovacích scénářů

1.  Test validace vstupních údajů při objednání pro nepřihlášeného uživatele
    Ověřit, že při vynechání povinných údajů (jako je e-mail nebo adresa) při objednávání jako host se zobrazí příslušné chybové zprávy.
    Test by měl také ověřit správnost těchto zpráv a jejich umístění.
2.  Test přidání více položek do košíku a jejich úpravy
    Přidat více kusů (například tři) různých produktů do košíku, změnit jejich množství a poté ověřit, že se celková cena správně aktualizuje.
    Test by měl zahrnovat úpravu počtu produktů, odstranění produktů a aktualizaci košíku.
3.  Testování různých způsobů dopravy a platby
    Ověřit funkčnost výběru různých možností dopravy a platby, například osobní odběr, doručení kurýrem, platba kartou nebo převodem.
    U každé kombinace zkontrolovat, že správně pokračuje na další stránku objednávky a že se zobrazí správné informace o dopravě a platbě.
4.  Testování slevového kupónu
    Ověřit, že po zadání platného slevového kódu se sleva správně aplikuje na cenu v košíku.
    Vyzkoušet také neplatný slevový kód a ověřit, že se zobrazí chybová zpráva.
5.  Test úspěšného odhlášení po dokončení objednávky jako přihlášený uživatel
    Po dokončení objednávky jako přihlášený uživatel se odhlásit a ověřit, že se uživatel úspěšně odhlásil a že košík je po opětovném přihlášení prázdný.
6.  Test automatického uložení údajů po přihlášení pro další objednávku
    Ověřit, že pokud uživatel dokončí objednávku jako přihlášený, jsou jeho údaje (např. adresa) automaticky vyplněny při další objednávce.
7.  Test objednání produktu mimo skladovou dostupnost
    Přidat do košíku produkt, který není skladem, a zkontrolovat, zda je uživatel upozorněn, že produkt není k dispozici.
    Test by měl ověřit, že objednávku nelze dokončit, pokud v košíku zůstává položka bez skladové dostupnosti.

*/
