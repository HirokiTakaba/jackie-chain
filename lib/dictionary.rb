require 'open-uri'
require 'nokogiri'

module Dictionary
  def translate_en_to_jp(word_en)
    enc_word = URI.encode(word_en)
    url = "http://public.dejizo.jp/NetDicV09.asmx/SearchDicItemLite?Dic=EJdict&Word=#{enc_word}&Scope=HEADWORD&Match=EXACT&Merge=OR&Prof=XHTML&PageSize=20&PageIndex=0"
    xml = open(url).read
    doc = Nokogiri::XML(xml)
    item_id = doc.search('ItemID').first.inner_text rescue nil
    return nil unless item_id
    url = "http://public.dejizo.jp/NetDicV09.asmx/GetDicItemLite?Dic=EJdict&Item=#{item_id}&Loc=&Prof=XHTML"
    xml = open(url).read
    doc = Nokogiri::XML(xml)
    text = doc.search('Body').inner_text rescue nil
    text.gsub(/(\r\n|\r|\n|\t|\s)/, '').split('，').each do |wd|
      next if wd =~ /(〈|〉)/
      return wd
    end
    return nil
  end

  def translate_jp_to_en(word_jp)
    enc_word = URI.encode(word_jp)
    url = "http://public.dejizo.jp/NetDicV09.asmx/SearchDicItemLite?Dic=EdictJE&Word=#{enc_word}&Scope=HEADWORD&Match=EXACT&Merge=OR&Prof=XHTML&PageSize=20&PageIndex=0"
    xml = open(url).read
    doc = Nokogiri::XML(xml)
    item_id = doc.search('ItemID').first.inner_text rescue nil
    return item_id
  end

  def get_cambridge_text(word)
    enc_word = URI.encode(word)
    url = "http://dictionary.cambridge.org/dictionary/british/#{enc_word}"
    html = open(url).read
    doc = Nokogiri::HTML(html)
    text = doc.search('span[class="def-head"]').inner_text
    sound = doc.search('a[class="sound audio_play_button pron-uk"]').first['data-src-ogg']
    return text, sound
  end

  def text_to_word_list(text)
    arr = []
    text.split(' ').each do |word|
      word.gsub!(/[^a-z]/, '')
      next if word.size <= 3
      next if word =~ /(s|ing)$/
      arr << word
    end
    return arr
  end

  def get_random_en_word(word)
    text, sound = get_cambridge_text(word)
    word_list = text_to_word_list(text)
    word_list.sort_by{rand}.each do |wd|
      word_jp = translate_en_to_jp(wd)
      next unless word_jp
      return wd, word_jp, sound
    end
    return nil, nil, nil
  end
end