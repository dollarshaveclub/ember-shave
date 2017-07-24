/* eslint max-len: "off" */
import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('em-shave', 'Integration | Component | em shave', {
  integration: true,
})

test('it truncates text', function truncateText (assert) {
  this.render(hbs`
    {{#em-shave ~}}
      Lorem ipsum dolor sit amet, minim molestie argumentum est at, pri legere torquatos instructior ex. Vis id odio atomorum oportere, quem modo fabellas sit at, dicat semper est ne. Apeirian detraxit pri eu. No solum accusam has. Ius ne harum mundi clita, eu pro tation audiam.
    {{/em-shave}}
  `)
  const text = this.$('.em-shave').contents()[0].data
  const expected = 'Lorem ipsum dolor sit'
  assert.equal(text, expected)
})

test('it truncates with provided the character', function truncateTextWithChar (assert) {
  this.render(hbs`
    {{#em-shave character="✁" ~}}
      Lorem ipsum dolor sit amet, minim molestie argumentum est at, pri legere torquatos instructior ex. Vis id odio atomorum oportere, quem modo fabellas sit at, dicat semper est ne. Apeirian detraxit pri eu. No solum accusam has. Ius ne harum mundi clita, eu pro tation audiam.
    {{/em-shave}}
  `)
  const hasScissors = this.$('.em-shave').text().includes('✁')
  assert.ok(hasScissors)
})

test('it truncates non-spaced languages', function truncateNonSpacedText (assert) {
  this.render(hbs`
    {{#em-shave spaces=false ~}}
      现在在厦门大学读历史学硕是我第二硕士第一硕士在墨尔本皇家理工大学读专业是翻译学现在在厦门大学读历史学硕士是我第二硕士第一硕士在墨尔本皇家理工大学读的专业是翻译学
    {{/em-shave}}
  `)

  const text = this.$('.em-shave').contents()[0].data
  const expected = '现在在厦门大学读历史'
  assert.equal(text, expected)
})
