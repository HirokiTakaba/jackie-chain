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

  def translate_en_to_jp_by_alc(word)
    enc_word = URI.encode(word)
    url = "http://eow.alc.co.jp/search?q=#{enc_word}&ref=sa"
    html = open(url).read
    doc = Nokogiri::HTML(html)
    text = doc.search('div[id=resultsList]').first.search('ol').first.inner_text
    text.split('、').each do |te|
      word = te.gsub(/｛.*｝/, '')
      next if word.size < 2
      next if word =~ /〔|〈|《|◆|【|「|『|［/
      return word
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
    return doc.search('span[class="def-head"]').inner_text
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
    text = get_cambridge_text(word)
    word_list = text_to_word_list(text)
    word_list.sort_by{rand}.each do |wd|
      word_jp = translate_en_to_jp_by_alc(wd)
      next unless word_jp

      data = {
        :question => word_jp,
        :answer => wd
      }

      return data
    end
    return nil, nil
  end

  def get_word_in_list()
    list = ["study","school","english","technology","feature"]
    word = list[Random.rand(list.length)]
  end
end